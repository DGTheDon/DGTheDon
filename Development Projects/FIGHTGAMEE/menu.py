import pygame

class Menu:
    def __init__(self, items):
        self.items = items
        self.selected_index = 0

    def move_selection_up(self):
        self.selected_index -= 1
        if self.selected_index < 0:
            self.selected_index = len(self.items) - 1

    def move_selection_down(self):
        self.selected_index = (self.selected_index + 1) % len(self.items)

    def get_selected_item(self):
        return self.items[self.selected_index]

    def draw(self, screen):
        # Draw menu items
        font = pygame.font.Font(None, 36)
        for i, item in enumerate(self.items):
            color = (255, 255, 255) if i == self.selected_index else (200, 200, 200)
            text = font.render(item, True, color)
            screen.blit(text, (screen.get_width() // 2 - text.get_width() // 2, 200 + i * 40))