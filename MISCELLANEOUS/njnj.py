import math

vertices = [(0, 0), (4, 0), (4, 2), (0, 2)]

scale_factor = 1.5

angle_degrees = 180
angle_radians = math.radians(angle_degrees)

def scale_point(point, scale):
    x, y = point
    return (x * scale, y * scale)

def rotate_point(point, angle_rad):
    x, y = point
    
    cos_theta = math.cos(angle_rad)
    sin_theta = math.sin(angle_rad)
    x_new = x * cos_theta - y * sin_theta
    y_new = x * sin_theta + y * cos_theta
    return (x_new, y_new)

transformed_vertices = []
for v in vertices:
    scaled = scale_point(v, scale_factor)
    rotated = rotate_point(scaled, angle_radians)
    transformed_vertices.append(rotated)

print("Final coordinates after transformations:")
for v in transformed_vertices:
    print(f"({v[0]:.2f}, {v[1]:.2f})")
