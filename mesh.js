class Mesh {
    constructor(gl, vertices, indices, shaderPgm){
        this.vertices = vertices;
        this.indices = indices;

        let vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        
        //let vertexArray = gl.createVertexArray();
        //gl.bindVertexArray(vertexArray);
        let verticesArray = new Float32Array(this.vertices);
        gl.bufferData(gl.ARRAY_BUFFER, verticesArray, gl.STATIC_DRAW);

        let indexbuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer);
        let indicesArray = Uint8Array(this.indices);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicesArray, gl.STATIC_DRAW);

        let pgm = shaderPgm.getProgram();
        let position = gl.getAttribLocation(pgm, "a_vertexPosition");
        gl.vertexAttribPointer(position, 4, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(position);
    }

    indices(){
        return this.indices;
    }

    vertices(){
        return this.vertices;
    }
}