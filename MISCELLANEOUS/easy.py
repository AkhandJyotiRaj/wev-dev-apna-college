vertices = [(0, 0), (4, 0), (4, 2), (0, 2)]


scale = 1.5


def scale_point(x, y, scale):
    return (x * scale, y * scale)

def rotate_180(x, y):
    
    return (-x, -y)

final_vertices = []
for x, y in vertices:

    sx, sy = scale_point(x, y, scale)

    rx, ry = rotate_180(sx, sy)
    final_vertices.append((rx, ry))

print("Final coordinates after scaling and rotation:")
for point in final_vertices:
    print(point)
