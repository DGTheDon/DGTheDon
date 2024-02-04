import pygame
from src.player import Player

class CharacterSelection:
    def __init__(self, screen):
        self.screen = screen
        self.characters = self.load_characters()
        self.selected_character = None
        self.font = pygame.font.Font(None, 36)

    def load_characters(self):
        characters = []
        # Add characters with their unique abilities
        characters.append(Player("Antivirus A", "assets/graphics/player_sprites.png", (100, 100), "Double Jump"))
        characters.append(Player("Antivirus B", "assets/graphics/player_sprites.png", (300, 100), "Speed Boost"))
        characters.append(Player("Antivirus C", "assets/graphics/player_sprites.png", (500, 100), "Shield"))
        return characters

    def draw(self):
        self.screen.fill((0, 0, 0))
        for character in self.characters:
            character.draw(self.screen)
            ability_text = self.font.render(character.ability, True, (255, 255, 255))
            self.screen.blit(ability_text, (character.rect.x, character.rect.y + character.rect.height + 10))

    def handle_input(self, event):
        if event.type == pygame.MOUSEBUTTONDOWN:
            for character in self.characters:
                if character.rect.collidepoint(event.pos):
                    self.selected_character = character
                    return True
        return False

    def get_selected_character(self):
        return self.selected_character