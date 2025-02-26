class Camera {
    constructor(eyeVec, refVec, FOVRad, aspectRatio, near, far, shaderProgram, webGL) {
        this.webGL = webGL;

        let upVec = [0.0, 1.0, 0.0];
        this.viewMatrix = mat4.create();
        mat4.lookAt(this.viewMatrix, eyeVec, refVec, upVec);

        let viewMatrixLocation = this.webGL.getUniformLocation(shaderProgram.getProgram(), "u_viewMatrix");
        this.webGL.uniformMatrix4fv(viewMatrixLocation, false, this.viewMatrix);

        
        this.projectionMatrix = mat4.create();
        mat4.perspective(this.projectionMatrix, FOVRad, aspectRatio, near, far);

        let projectionMatrixLocation = this.webGL.getUniformLocation(shaderProgram.getProgram(), "u_projectionMatrix");
        this.webGL.uniformMatrix4fv(projectionMatrixLocation, false, this.projectionMatrix);
    }
}