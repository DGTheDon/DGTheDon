
import pygame

class Level:
    def __init__(self, bg_image_1, bg_image_2):
        self.bg_image_1 = bg_image_1
        self.bg_image_2 = bg_image_2

    def update(self, scroll):
        self.scroll = scroll

    def draw(self, screen):
        screen.blit(self.bg_image_1, (self.scroll % self.bg_image_1.get_width(), 0))
        screen.blit(self.bg_image_1, (self.scroll % self.bg_image_1.get_width() - self.bg_image_1.get_width(), 0))
        screen.blit(self.bg_image_2, (self.scroll // 2 % self.bg_image_2.get_width(), 0))
        screen.blit(self.bg_image_2, (self.scroll // 2 % self.bg_image_2.get_width() - self.bg_image_2.get_width(), 0))