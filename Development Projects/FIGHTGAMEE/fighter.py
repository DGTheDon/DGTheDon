
import pygame

class Fighter:
    def __init__(self, x, y, color):
        self.x = x
        self.y = y
        self.color = color

    @staticmethod
    def create_fighters():
        colors = [
            (255, 0, 0),     # Red
            (0, 255, 0),     # Green
            (0, 0, 255),     # Blue
            (255, 255, 0),   # Yellow
            (0, 255, 255),   # Cyan
            (255, 0, 255),   # Magenta
            (255, 165, 0),   # Orange
            (128, 0, 128)    # Purple
        ]

        fighters = []
        for i, color in enumerate(colors):
            x = 100 + i * 60  # Adjust the x position of each fighter
            y = 200
            fighter = Fighter(x, y, color)
            fighters.append(fighter)
        return fighters

    def draw(self, screen):
        # Draw fighter
        # ...
