namespace ts.BreakpointResolver {
    /**
     * Get the breakpoint span in given sourceFile
     */
    export function spanInSourceFileAtLocation(sourceFile: SourceFile, position: number) {
        // Cannot set breakpoint in dts file
        if (sourceFile.isDeclarationFile) {
            return undefined;
        }

        let tokenAtLocation = getTokenAtPosition(sourceFile, position);
        const lineOfPosition = sourceFile.getLineAndCharacterOfPosition(position).line;
        if (sourceFile.getLineAndCharacterOfPosition(tokenAtLocation.getStart(sourceFile)).line > lineOfPosition) {
            // Get previous token if the token is returned starts on new line
            // eg: let x =10; |--- cursor is here
            //     let y = 10;
            // token at position will return let keyword on second line as the token but we would like to use
            // token on same line if trailing trivia (comments or white spaces on same line) part of the last token on that line
            const preceding = findPrecedingToken(tokenAtLocation.pos, sourceFile);

            // It's a blank line
            if (!preceding || sourceFile.getLineAndCharacterOfPosition(preceding.getEnd()).line !== lineOfPosition) {
                return undefined;
            }
            tokenAtLocation = preceding;
        }

        // Cannot set breakpoint in ambient declarations
        if (tokenAtLocation.flags & NodeFlags.Ambient) {
            return undefined;
        }

        // Get the span in the node based on its syntax
        return spanInNode(tokenAtLocation);

        function textSpan(startNode: Node, endNode?: Node) {
            const start = startNode.decorators ?
                skipTrivia(sourceFile.text, startNode.decorators.end) :
                startNode.getStart(sourceFile);
            return createTextSpanFromBounds(start, (endNode || startNode).getEnd());
        }
