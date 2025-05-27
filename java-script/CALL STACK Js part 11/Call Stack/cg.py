import pygame
import sys

# Initialize Pygame
pygame.init()

# Set up the display
screen_width, screen_height = 800, 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Draw Rectangle by Vertices")

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Fill the screen with a white background
screen.fill(WHITE)

# Function to draw rectangle using four vertices
def draw_rectangle(vertices):
    # Draw lines between the vertices
    pygame.draw.line(screen, BLACK, vertices[0], vertices[1], 2)
    pygame.draw.line(screen, BLACK, vertices[1], vertices[2], 2)
    pygame.draw.line(screen, BLACK, vertices[2], vertices[3], 2)
    pygame.draw.line(screen, BLACK, vertices[3], vertices[0], 2)

# Get user input for the rectangle's vertices
print("Enter the four vertices of the rectangle:")
x1, y1 = map(int, input("Enter the coordinates of the first vertex (x1, y1): ").split(","))
x2, y2 = map(int, input("Enter the coordinates of the second vertex (x2, y2): ").split(","))
x3, y3 = map(int, input("Enter the coordinates of the third vertex (x3, y3): ").split(","))
x4, y4 = map(int, input("Enter the coordinates of the fourth vertex (x4, y4): ").split(","))

vertices = [(x1, y1), (x2, y2), (x3, y3), (x4, y4)]

draw_rectangle(vertices)

pygame.display.flip()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

pygame.quit()
sys.exit()
