import pygame
from src.level_design import Level
from src.player import Player

class RAMLevel(Level):
    def __init__(self, player: Player):
        super().__init__(player)
        self.level_name = "RAM Level"
        self.background_image = pygame.image.load("assets/graphics/backgrounds/ram_level.png")

    def create_platforms(self):
        # Create disappearing and reappearing platforms
        self.platforms = []
        for i in range(10):
            platform = DisappearingPlatform(i * 100, 300)
            self.platforms.append(platform)

    def update(self, delta_time):
        super().update(delta_time)
        for platform in self.platforms:
            platform.update(delta_time)

class DisappearingPlatform(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = pygame.Surface((100, 20))
        self.image.fill((255, 255, 255))
        self.rect = self.image.get_rect()
        self.rect.x = x
        self.rect.y = y
        self.timer = 0
        self.visible = True

    def update(self, delta_time):
        self.timer += delta_time
        if self.timer >= 1000:
            self.visible = not self.visible
            self.timer = 0

        if self.visible:
            self.image.set_alpha(255)
        else:
            self.image.set_alpha(0)