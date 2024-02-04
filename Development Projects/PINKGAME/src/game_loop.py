import pygame
from src.start_screen import StartScreen
from src.character_selection import CharacterSelection
from src.level_design import LevelDesign
from src.player import Player
from src.camera import Camera
from src.game_states import GameState
from src.health_system import HealthSystem
from src.lives_system import LivesSystem
from src.time_system import TimeSystem
from src.score_system import ScoreSystem

pygame.init()

# Screen dimensions
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

# Game window
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("2D Platformer Game in a Computer System")

# Clock for controlling frame rate
clock = pygame.time.Clock()

# Game state manager
game_state = GameState()

# Start screen
start_screen = StartScreen(screen)

# Character selection screen
character_selection = CharacterSelection(screen)

# Level design
level_design = LevelDesign(screen)

# Player
player = Player()

# Camera
camera = Camera(SCREEN_WIDTH, SCREEN_HEIGHT)

# Health, lives, time, and score systems
health_system = HealthSystem()
lives_system = LivesSystem()
time_system = TimeSystem()
score_system = ScoreSystem()

# Main game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Update game state
    game_state.update()

    # Clear screen
    screen.fill((0, 0, 0))

    if game_state.current_state == "start_screen":
        start_screen.update()
        start_screen.draw()

    elif game_state.current_state == "character_selection":
        character_selection.update()
        character_selection.draw()

    elif game_state.current_state == "main_game":
        # Update level design
        level_design.update(player)

        # Update player
        player.update(level_design.current_level)

        # Update camera
        camera.update(player.rect)

        # Update health, lives, time, and score systems
        health_system.update(player)
        lives_system.update(player)
        time_system.update()
        score_system.update(player)

        # Draw level design
        level_design.draw(camera)

        # Draw player
        player.draw(screen, camera)

        # Draw health, lives, time, and score systems
        health_system.draw(screen)
        lives_system.draw(screen)
        time_system.draw(screen)
        score_system.draw(screen)

    # Update display
    pygame.display.flip()

    # Control frame rate
    clock.tick(60)

pygame.quit()