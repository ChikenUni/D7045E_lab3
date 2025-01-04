class Mesh {
    constructor(webGL, vertices, indices, shaderPgm){
        this.vertices = vertices;
        this.indices = indices;

        let vertexArray = webGL.createVertexArray();
        webGL.bindVertexArray(vertexArray);

        let vertexBuffer = webGL.createBuffer();
        webGL.bindBuffer(webGL.ARRAY_BUFFER, vertexBuffer);
        
        let verticesArray = new Float32Array(this.vertices);
        webGL.bufferData(webGL.ARRAY_BUFFER, verticesArray, webGL.STATIC_DRAW);

        let indexbuffer = webGL.createBuffer();
        webGL.bindBuffer(webGL.ELEMENT_ARRAY_BUFFER, indexbuffer);
        let indicesArray = new Uint8Array(this.indices);
        webGL.bufferData(webGL.ELEMENT_ARRAY_BUFFER, indicesArray, webGL.STATIC_DRAW);

        let pgm = shaderPgm.getProgram();
        let position = webGL.getAttribLocation(pgm, "a_pos");
        webGL.vertexAttribPointer(position, 4, webGL.FLOAT, false, 0, 0);
        webGL.enableVertexAttribArray(position);
    }

    getIndices(){
        return this.indices;
    }

    getVertices(){
        return this.vertices;
    }
}