class monochromeMaterial extends material {
    constructor(gl, shaderPgm, colour){
        super(gl, shaderPgm);
        this.shaderPgm = shaderPgm;
    }

    applyMat(transformMatrix) {
        let pgm = this.shaderPgm.getProgram();

        let colour_loc = this.gl.getUniformLocation(pgm, "u_colour");
        this.gl.uniform4fv(colour_loc, flatten(this.colour));

        let trans_loc = this.gl.getUniformLocation(pgm, "u_transformMatrix");
        this.gl.uniformMatrix4fv(trans_loc, false, flatten(transformMatrix));
    }
}