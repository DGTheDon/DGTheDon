class Player:
    def __init__(self, x, y, width, height):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.velocity = 5
        self.jump_height = 10
        self.double_jump_height = 15
        self.is_jumping = False
        self.is_double_jumping = False
        self.is_crouching = False
        self.is_running = False
        self.is_climbing = False
        self.health = 100
        self.lives = 3
        self.score = 0
        self.bullets = []

    def move_left(self):
        self.x -= self.velocity

    def move_right(self):
        self.x += self.velocity

    def jump(self):
        if not self.is_jumping:
            self.y -= self.jump_height
            self.is_jumping = True
        elif not self.is_double_jumping:
            self.y -= self.double_jump_height
            self.is_double_jumping = True

    def crouch(self):
        self.is_crouching = True

    def stand_up(self):
        self.is_crouching = False

    def run(self):
        self.is_running = True

    def walk(self):
        self.is_running = False

    def climb(self):
        self.is_climbing = True

    def stop_climbing(self):
        self.is_climbing = False

    def shoot(self):
        self.bullets.append(Bullet(self.x, self.y))

    def take_damage(self, damage):
        self.health -= damage
        if self.health <= 0:
            self.lives -= 1
            self.health = 100

    def collect_coin(self, coin_value):
        self.score += coin_value

    def use_power_up(self, power_up):
        power_up.activate(self)

    def update(self):
        if self.is_jumping or self.is_double_jumping:
            self.y += self.jump_height
            self.is_jumping = False
            self.is_double_jumping = False

        if self.is_running:
            self.velocity = 10
        else:
            self.velocity = 5

        if self.is_climbing:
            self.y -= self.velocity

        for bullet in self.bullets:
            bullet.update()

class Bullet:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.velocity = 15

    def update(self):
        self.x += self.velocity