import pygame

# Initialize Pygame
pygame.init()

# Define game constants
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
FPS = 60

# Set up the screen
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Autonomous")

# Define game objects
class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = pygame.Surface((32, 32))
        self.image.fill((255, 0, 0))
        self.rect = self.image.get_rect()
        self.rect.center = (SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2)
        self.speed = 5

    def update(self):
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            self.rect.x -= self.speed
        if keys[pygame.K_RIGHT]:
            self.rect.x += self.speed
        if keys[pygame.K_UP]:
            self.rect.y -= self.speed
        if keys[pygame.K_DOWN]:
            self.rect.y += self.speed

class Platform(pygame.sprite.Sprite):
    def __init__(self, x, y, width, height):
        super().__init__()
        self.image = pygame.Surface((width, height))
        self.image.fill((0, 255, 0))
        self.rect = self.image.get_rect()
        self.rect.x = x
        self.rect.y = y

# Set up game objects
all_sprites = pygame.sprite.Group()
player = Player()
all_sprites.add(player)
platforms = pygame.sprite.Group()
p1 = Platform(0, SCREEN_HEIGHT - 50, SCREEN_WIDTH, 50)
platforms.add(p1)
all_sprites.add(p1)

# Start game loop
clock = pygame.time.Clock()
running = True
while running:
    # Process events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Update game state
    all_sprites.update()

    # Check for collisions
    hits = pygame.sprite.spritecollide(player, platforms, False)
    if hits:
        player.rect.y = hits[0].rect.top

    # Draw game objects
    screen.fill((0, 0, 255))
    all_sprites.draw(screen)

    # Update screen
    pygame.display.flip()

    # Set the frame rate
    clock.tick(FPS)

# Clean up
pygame.quit()
