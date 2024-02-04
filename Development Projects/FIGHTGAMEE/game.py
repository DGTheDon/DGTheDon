import pygame
from fighter import Fighter
from level import Level

class GameState:
    START_MENU = "start_menu"
    SINGLE_PLAYER = "single_player"
    VERSUS = "versus"
    CHARACTER_SELECTION = "character_selection"
    LEVEL_SELECTION = "level_selection"
    IN_GAME = "in_game"

class Game:
    def __init__(self, screen):
        self.screen = screen
        self.load_assets()
        self.create_objects()

    def load_assets(self):
        self.bg_image_1 = pygame.image.load("assets/images/backgrounds/level_1.png").convert_alpha()
        self.bg_image_2 = pygame.image.load("assets/images/backgrounds/level_2.png").convert_alpha()

    def create_objects(self):
        self.scroll = 0
        self.level = Level(self.bg_image_1, self.bg_image_2)
        self.fighters = Fighter.create_fighters()

    def update(self, game_state):
        if game_state == GameState.IN_GAME:
            self.scroll += 1
            self.level.update(self.scroll)

    def draw(self, game_state, start_menu=None):
        if game_state == GameState.START_MENU:
            start_menu.draw(self.screen)
        elif game_state in (GameState.SINGLE_PLAYER, GameState.VERSUS, GameState.IN_GAME):
            self.level.draw(self.screen)
            for fighter in self.fighters:
                fighter.draw(self.screen)