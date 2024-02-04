import pygame
from src.start_screen import StartScreen
from src.character_selection import CharacterSelection
from src.game_loop import GameLoop
from src.game_states import GameState

pygame.init()

# Screen dimensions
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

# Colors
WHITE = (255, 255, 255)

# Initialize screen
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("2D Platformer Game in a Computer System")

# Initialize game states
start_screen = StartScreen(screen)
character_selection = CharacterSelection(screen)
game_loop = GameLoop(screen)

# Set initial game state
current_state = GameState.START_SCREEN

# Main game loop
running = True
while running:
    screen.fill(WHITE)

    if current_state == GameState.START_SCREEN:
        start_screen.update()
        if start_screen.finished:
            current_state = GameState.CHARACTER_SELECTION

    elif current_state == GameState.CHARACTER_SELECTION:
        character_selection.update()
        if character_selection.finished:
            game_loop.set_character(character_selection.selected_character)
            current_state = GameState.GAME_LOOP

    elif current_state == GameState.GAME_LOOP:
        game_loop.update()
        if game_loop.finished:
            current_state = GameState.START_SCREEN

    pygame.display.flip()

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

pygame.quit()