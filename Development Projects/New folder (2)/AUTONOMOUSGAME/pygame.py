import os

# Create project directory
project_dir = "my_game"
if not os.path.exists(project_dir):
    os.makedirs(project_dir)

# Create assets directory
assets_dir = os.path.join(project_dir, "assets")
if not os.path.exists(assets_dir):
    os.makedirs(assets_dir)

# Create images directory
images_dir = os.path.join(assets_dir, "images")
if not os.path.exists(images_dir):
    os.makedirs(images_dir)

# Create sounds directory
sounds_dir = os.path.join(assets_dir, "sounds")
if not os.path.exists(sounds_dir):
    os.makedirs(sounds_dir)

# Create fonts directory
fonts_dir = os.path.join(assets_dir, "fonts")
if not os.path.exists(fonts_dir):
    os.makedirs(fonts_dir)

# Create levels directory
levels_dir = os.path.join(project_dir, "levels")
if not os.path.exists(levels_dir):
    os.makedirs(levels_dir)

# Create objects directory
objects_dir = os.path.join(project_dir, "objects")
if not os.path.exists(objects_dir):
    os.makedirs(objects_dir)

# Create utils directory
utils_dir = os.path.join(project_dir, "utils")
if not os.path.exists(utils_dir):
    os.makedirs(utils_dir)

# Create game.py file
game_file = os.path.join(project_dir, "game.py")
if not os.path.exists(game_file):
    with open(game_file, "w") as f:
        f.write("# Insert game code here")

# Create level files
for i in range(1, 4):
    level_file = os.path.join(levels_dir, f"level{i}.py")
    if not os.path.exists(level_file):
        with open(level_file, "w") as f:
            f.write("# Insert level code here")

# Create object files
object_files = ["player.py", "enemy.py", "platform.py", "projectile.py"]
for obj_file in object_files:
    obj_file_path = os.path.join(objects_dir, obj_file)
    if not os.path.exists(obj_file_path):
        with open(obj_file_path, "w") as f:
            f.write("# Insert object code here")

# Create utility files
util_files = ["collision.py", "config.py", "helpers.py"]
for util_file in util_files:
    util_file_path = os.path.join(utils_dir, util_file)
    if not os.path.exists(util_file_path):
        with open(util_file_path, "w") as f:
            f.write("# Insert utility code here")
