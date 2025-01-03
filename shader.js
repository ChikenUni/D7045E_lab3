class Shader {
    constructor(shaderSource, shaderType, webGL) {
        if (shaderType == webGL.VERTEX_SHADER) {
            this.shaderTypeNum = 0;
        } else {
            this.shaderTypeNum = 1;
        }

        this.shader = webGL.createShader(shaderType);
        webGL.shaderSource(this.shader, shaderSource);
        webGL.compileShader(this.shader);

        if ( ! gl.getShaderParameter(this.shader, webGL.COMPILE_STATUS) ) {
            throw new Error("Error in shader:  " + webGL.getShaderInfoLog(this.shader));
        }
    }

    shader() {
        return this.shader;
    }

    type() {
        return this.shaderTypeNum;
    }
}