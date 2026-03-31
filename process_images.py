from PIL import Image
import os
import glob

# source directory
src_dir = 'sequence'
# target directory
dst_dir = 'temp-app/public/sequence'

if not os.path.exists(dst_dir):
    os.makedirs(dst_dir)

# Crop amount for the watermark at the bottom
# The images are 1280x720, we'll crop the bottom 80 pixels -> total height 640
crop_bottom = 80

files = sorted(glob.glob(os.path.join(src_dir, '*.png')))

print(f"Starting to process {len(files)} files...")

for idx, f in enumerate(files):
    img = Image.open(f)
    width, height = img.size
    
    # Calculate the bounding box for cropping (left, upper, right, lower)
    box = (0, 0, width, height - crop_bottom)
    
    # Crop the image
    cropped_img = img.crop(box)
    
    # We want a clean name, optionally renaming cleanly to frame_0.webp, frame_1.webp or keep the same number
    # Original filename format: 'frame_000_delay-0.066s.png'
    # We will just write frame_{idx:04d}.webp so it is easy to iterate in frontend
    new_filename = f"frame_{idx:04d}.webp"
    dst_path = os.path.join(dst_dir, new_filename)
    
    # Save as webp with high quality
    cropped_img.save(dst_path, 'WEBP', quality=85)

print("Finished processing all images!")
