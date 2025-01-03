class material {
    constructor(gl, shaderPgm){
        this.gl = gl;
        this.shaderPgm = shaderPgm;
    }

    applyMat() {
        throw new Error("Implement this method on class extending material!")
    }
}