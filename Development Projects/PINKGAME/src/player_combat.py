class PlayerCombat:
    def __init__(self, player):
        self.player = player
        self.bullets = []
        self.bullet_speed = 10
        self.shoot_cooldown = 0.5
        self.last_shoot_time = 0

    def shoot(self, current_time):
        if current_time - self.last_shoot_time >= self.shoot_cooldown:
            self.last_shoot_time = current_time
            bullet = {
                "x": self.player["x"] + self.player["width"] // 2,
                "y": self.player["y"] + self.player["height"] // 2,
                "direction": self.player["facing"]
            }
            self.bullets.append(bullet)

    def update_bullets(self):
        for bullet in self.bullets:
            bullet["x"] += self.bullet_speed * bullet["direction"]
            if bullet["x"] < 0 or bullet["x"] > self.player["level"]["width"]:
                self.bullets.remove(bullet)

    def check_bullet_collision(self, enemies):
        for bullet in self.bullets:
            for enemy in enemies:
                if (bullet["x"] >= enemy["x"] and bullet["x"] <= enemy["x"] + enemy["width"]) and (
                        bullet["y"] >= enemy["y"] and bullet["y"] <= enemy["y"] + enemy["height"]):
                    enemies.remove(enemy)
                    self.bullets.remove(bullet)
                    self.player["score"] += 100
                    break

    def update(self, current_time, enemies):
        self.update_bullets()
        self.check_bullet_collision(enemies)