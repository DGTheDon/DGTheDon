import pygame
from src.player import Player

class PlayerMovement:
    def __init__(self, player: Player):
        self.player = player
        self.gravity = 0.5
        self.jump_height = 10
        self.double_jump = False

    def move_left(self, speed):
        self.player.rect.x -= speed

    def move_right(self, speed):
        self.player.rect.x += speed

    def jump(self):
        if self.player.on_ground or not self.double_jump:
            self.player.velocity.y = -self.jump_height
            self.player.on_ground = False
            if not self.player.on_ground:
                self.double_jump = True

    def crouch(self):
        self.player.rect.height = self.player.height // 2

    def stand_up(self):
        self.player.rect.height = self.player.height

    def run(self, speed):
        self.move_right(speed * 1.5)

    def climb(self, speed):
        self.player.rect.y -= speed

    def apply_gravity(self):
        self.player.velocity.y += self.gravity

    def update(self, speed):
        keys = pygame.key.get_pressed()

        if keys[pygame.K_LEFT]:
            self.move_left(speed)
        if keys[pygame.K_RIGHT]:
            self.move_right(speed)
        if keys[pygame.K_UP] and self.player.on_ladder:
            self.climb(speed)
        if keys[pygame.K_DOWN] and not self.player.on_ground:
            self.crouch()
        else:
            self.stand_up()
        if keys[pygame.K_SPACE]:
            self.jump()
        if keys[pygame.K_LSHIFT]:
            self.run(speed)

        self.apply_gravity()
        self.player.rect.y += self.player.velocity.y
        self.player.rect.x += self.player.velocity.x

        if self.player.on_ground:
            self.double_jump = False