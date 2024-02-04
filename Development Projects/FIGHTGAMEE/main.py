
import pygame
from game import Game, GameState
from menu import Menu

# Initialize pygame
pygame.init()

# Set up display, clock, and other essentials
screen = pygame.display.set_mode((0, 0), pygame.FULLSCREEN)
clock = pygame.time.Clock()

# Set up menus and game state
start_menu = Menu(["Single Player", "Versus"])
game_state = GameState.START_MENU

# Create a new game object
game = Game(screen)

# Main game loop
running = True
while running:
    # Event handling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                running = False
            elif game_state == GameState.START_MENU:
                if event.key == pygame.K_UP:
                    start_menu.move_selection_up()
                elif event.key == pygame.K_DOWN:
                    start_menu.move_selection_down()
                elif event.key == pygame.K_RETURN:
                    if start_menu.get_selected_item() == "Single Player":
                        game_state = GameState.SINGLE_PLAYER
                    elif start_menu.get_selected_item() == "Versus":
                        game_state = GameState.VERSUS

    # Update and draw the game
    game.update(game_state)
    game.draw(game_state, start_menu)

    # Update the display and limit the frame rate
    pygame.display.flip()
    clock.tick(60)

# Quit pygame
pygame.quit()