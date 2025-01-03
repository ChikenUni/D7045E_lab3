class ShaderProgram {
    constructor(vertexShader, fragmentShader, webGL) {
        this.vertexShader = vertexShader;
        this.fragmentShader = fragmentShader;
        this.webGL = webGL;

        this.program = webGL.createProgram();
        this.webGL.attachShader(this.program, this.vertexShader.shader());
        this.webGL.attachShader(this.program, this.fragmentShader.shader());
        this.webGL.linkProgram(this.program);

        if ( ! this.webGL.getProgramParameter( this.program, this.webGL.LINK_STATUS) ) {
            throw new Error("Link error in program:  " + this.webGL.getProgramInfoLog(this.program));
         }
    }

    activate() {
        this.webGL.useProgram(this.program);
    }

    program() {
        return this.program;
    }
}