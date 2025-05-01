from PIL import Image

# 1. 打开原图并转换为 RGBA（以支持透明通道）
img = Image.open('/Users/yichi/Documents/GitHub/YichiCS.github.io/What_fries_ahead.png').convert('RGBA')

# 2. 裁切出两块
top = img.crop((0, 0, 600, 300))
bottom = img.crop((0, 300, 600, 611))

# 3. 新建一张 1200×311 的透明画布
new_img = Image.new('RGBA', (1200, 311), (255, 255, 255, 0))

# 4. 带 alpha 通道地粘贴两块
new_img.paste(top,    (0,   0), top)
new_img.paste(bottom, (600, 0), bottom)

# 5. 保存为 PNG，保留透明背景
new_img.save('/Users/yichi/Documents/GitHub/YichiCS.github.io/assets/image/What_fries_ahead.png', 'PNG')
