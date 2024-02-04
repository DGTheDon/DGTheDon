class VirusEnemy:
    def __init__(self, x, y, speed, replication_rate):
        self.x = x
        self.y = y
        self.speed = speed
        self.replication_rate = replication_rate
        self.replication_timer = 0

    def update(self, delta_time):
        self.x += self.speed * delta_time
        self.replication_timer += delta_time

        if self.replication_timer >= self.replication_rate:
            self.replicate()
            self.replication_timer = 0

    def replicate(self):
        new_virus = VirusEnemy(self.x, self.y, self.speed, self.replication_rate)
        return new_virus

    def on_collision(self, player):
        player.take_damage(1)