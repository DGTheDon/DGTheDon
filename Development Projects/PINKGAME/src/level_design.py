class Level:
    def __init__(self, level_type, platforms, enemies, items):
        self.level_type = level_type
        self.platforms = platforms
        self.enemies = enemies
        self.items = items

def create_cpu_level():
    platforms = []  # Add platform objects for CPU level
    enemies = []  # Add enemy objects for CPU level
    items = []  # Add item objects for CPU level
    return Level("CPU", platforms, enemies, items)

def create_ram_level():
    platforms = []  # Add platform objects for RAM level
    enemies = []  # Add enemy objects for RAM level
    items = []  # Add item objects for RAM level
    return Level("RAM", platforms, enemies, items)

def create_hdd_level():
    platforms = []  # Add platform objects for HDD level
    enemies = []  # Add enemy objects for HDD level
    items = []  # Add item objects for HDD level
    return Level("HDD", platforms, enemies, items)

def generate_levels():
    cpu_level = create_cpu_level()
    ram_level = create_ram_level()
    hdd_level = create_hdd_level()
    return [cpu_level, ram_level, hdd_level]