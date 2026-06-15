import os
from PIL import Image

screenshots_dir = os.path.join(os.path.dirname(__file__), "src", "assets", "screenshots")

if not os.path.exists(screenshots_dir):
    print(f"Screenshots directory not found at: {screenshots_dir}")
    exit(1)

files = [f for f in os.listdir(screenshots_dir) if f.endswith(".png")]
print(f"Found {len(files)} PNG screenshots to convert to WebP...")

total_old_size = 0
total_new_size = 0

for file in files:
    png_path = os.path.join(screenshots_dir, file)
    base_name = os.path.splitext(file)[0]
    webp_path = os.path.join(screenshots_dir, f"{base_name}.webp")
    
    old_size = os.path.getsize(png_path)
    total_old_size += old_size
    
    try:
        # Load PNG and save as WebP
        with Image.open(png_path) as img:
            # Convert RGBA to RGB if necessary (though WebP supports transparency, converting to RGB makes it even smaller)
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                # Keep RGBA to preserve transparency or just convert, standard screenshot is fine in WebP
                img.save(webp_path, "WEBP", quality=75)
            else:
                img.save(webp_path, "WEBP", quality=75)
                
        new_size = os.path.getsize(webp_path)
        total_new_size += new_size
        
        reduction = (old_size - new_size) / old_size * 100
        print(f"Converted {file}: {old_size/1024:.1f} KB -> {new_size/1024:.1f} KB (Reduced by {reduction:.1f}%)")
        
        # Remove original PNG to save git size and keep it clean
        os.remove(png_path)
        
    except Exception as e:
        print(f"Error converting {file}: {str(e)}")

old_mb = total_old_size / (1024 * 1024)
new_mb = total_new_size / (1024 * 1024)
savings_mb = old_mb - new_mb
pct_saved = (total_old_size - total_new_size) / total_old_size * 100 if total_old_size > 0 else 0

print("-" * 50)
print(f"Conversion complete!")
print(f"Total original size: {old_mb:.2f} MB")
print(f"Total WebP size:     {new_mb:.2f} MB")
print(f"Saved:               {savings_mb:.2f} MB ({pct_saved:.1f}% reduction)")
print("-" * 50)
