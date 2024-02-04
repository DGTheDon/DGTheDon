import pygame
from src.character_selection import CharacterSelection
from src.game_states import GameState

class StartScreen:
    def __init__(self, screen, game_state_manager):
        self.screen = screen
        self.game_state_manager = game_state_manager
        self.font = pygame.font.Font(None, 36)
        self.title_text = self.font.render("Antivirus Platformer", True, (255, 255, 255))
        self.start_text = self.font.render("Press ENTER to start", True, (255, 255, 255))

    def update(self, events):
        for event in events:
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_RETURN:
                    self.game_state_manager.change_state(GameState.CHARACTER_SELECTION, CharacterSelection(self.screen, self.game_state_manager))

    def draw(self):
        self.screen.fill((0, 0, 0))
        self.screen.blit(self.title_text, (self.screen.get_width() // 2 - self.title_text.get_width() // 2, self.screen.get_height() // 3))
        self.screen.blit(self.start_text, (self.screen.get_width() // 2 - self.start_text.get_width() // 2, self.screen.get_height() // 2))
        pygame.display.flip()