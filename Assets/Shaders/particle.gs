#version 410

layout (points) in;
layout (triangle_strip, max_vertices = 4) out;

uniform mat4 projection;
uniform mat4 view;

in vec4 gsColor[];
in float gsRadius[];

out vec2 texcoord;
out vec4 color;
out float radius;

void main()
{
	vec4 position = gl_in[0].gl_Position;
	color = gsColor[0];
	radius = gsRadius[0];

	gl_Position = projection * (position + vec4(-radius, -radius, 0.0, 0.0));
	texcoord = vec2(0.0, 0.0);
    EmitVertex();

	gl_Position = projection * (position + vec4(radius, -radius, 0.0, 0.0));
	texcoord = vec2(1.0, 0.0);
    EmitVertex();
	
	gl_Position = projection * (position + vec4(-radius, radius, 0.0, 0.0));
	texcoord = vec2(0.0, 1.0);
    EmitVertex();
	
	gl_Position = projection * (position + vec4(radius, radius, 0.0, 0.0));
	texcoord = vec2(1.0, 1.0);
    EmitVertex();
    
    EndPrimitive();
}  