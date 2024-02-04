import pygame
from src.level_design import Level
from src.enemies import VirusEnemy, TrojanEnemy, WormEnemy

class CPULevel(Level):
    def __init__(self, player, screen):
        super().__init__(player, screen)
        self.level_name = "CPU Level"
        self.background_image = pygame.image.load("assets/graphics/backgrounds/cpu_level.png")

    def create_enemies(self):
        self.enemies.add(VirusEnemy(200, 300))
        self.enemies.add(TrojanEnemy(400, 200))
        self.enemies.add(WormEnemy(600, 100))

    def create_platforms(self):
        platform_positions = [
            (100, 400),
            (300, 300),
            (500, 200),
            (700, 100),
        ]

        for pos in platform_positions:
            platform = pygame.Rect(pos[0], pos[1], 100, 20)
            self.platforms.append(platform)

    def update(self):
        super().update()
        self.handle_enemy_collisions()
        self.handle_platform_collisions()