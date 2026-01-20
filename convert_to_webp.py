#!/usr/bin/env python3
import os
import json
from pathlib import Path
from PIL import Image

def convert_image_to_webp(image_path, quality=85):
    """Convert an image to WebP format"""
    try:
        # Open the image
        img = Image.open(image_path)

        # Convert RGBA to RGB if necessary
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background

        # Create WebP path
        webp_path = str(image_path).rsplit('.', 1)[0] + '.webp'

        # Save as WebP
        img.save(webp_path, 'WEBP', quality=quality, method=6)

        # Get file sizes
        original_size = os.path.getsize(image_path) / 1024  # KB
        webp_size = os.path.getsize(webp_path) / 1024  # KB
        reduction = ((original_size - webp_size) / original_size) * 100

        print(f"✓ {os.path.basename(image_path)} -> {os.path.basename(webp_path)}")
        print(f"  {original_size:.1f} KB -> {webp_size:.1f} KB ({reduction:.1f}% reduction)")

        return webp_path

    except Exception as e:
        print(f"✗ Error converting {image_path}: {e}")
        return None

def update_projects_jsx():
    """Update Projects.jsx to use .webp extensions"""
    projects_path = 'src/components/Projects.jsx'

    with open(projects_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace image extensions
    content = content.replace('.jpg', '.webp')
    content = content.replace('.jpeg', '.webp')
    content = content.replace('.png', '.webp')

    with open(projects_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\n✓ Updated {projects_path}")

def update_hero_section():
    """Update Hero.jsx to use .webp extensions"""
    hero_path = 'src/components/Hero.jsx'

    if os.path.exists(hero_path):
        with open(hero_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Replace image extensions
        content = content.replace('.jpg', '.webp')
        content = content.replace('.jpeg', '.webp')
        content = content.replace('.png', '.webp')

        with open(hero_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"✓ Updated {hero_path}")

def update_team_jsx():
    """Update Team.jsx to use .webp extensions"""
    team_path = 'src/components/Team.jsx'

    if os.path.exists(team_path):
        with open(team_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Replace image extensions
        content = content.replace('.jpg', '.webp')
        content = content.replace('.jpeg', '.webp')
        content = content.replace('.png', '.webp')

        with open(team_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"✓ Updated {team_path}")

def main():
    print("Starting image conversion to WebP...\n")

    # Find all images
    image_extensions = ['.jpg', '.jpeg', '.png']
    images_dir = Path('public/images')

    total_original = 0
    total_webp = 0
    converted_count = 0

    for ext in image_extensions:
        for image_path in images_dir.rglob(f'*{ext}'):
            original_size = os.path.getsize(image_path) / 1024
            total_original += original_size

            webp_path = convert_image_to_webp(str(image_path), quality=85)

            if webp_path:
                webp_size = os.path.getsize(webp_path) / 1024
                total_webp += webp_size
                converted_count += 1

    print(f"\n{'='*60}")
    print(f"Conversion Summary:")
    print(f"{'='*60}")
    print(f"Images converted: {converted_count}")
    print(f"Total original size: {total_original:.1f} KB ({total_original/1024:.1f} MB)")
    print(f"Total WebP size: {total_webp:.1f} KB ({total_webp/1024:.1f} MB)")
    print(f"Total reduction: {((total_original - total_webp) / total_original * 100):.1f}%")
    print(f"Space saved: {(total_original - total_webp):.1f} KB ({(total_original - total_webp)/1024:.1f} MB)")

    # Update component files
    print(f"\n{'='*60}")
    print("Updating component files...")
    print(f"{'='*60}")
    update_projects_jsx()
    update_hero_section()
    update_team_jsx()

    print(f"\n{'='*60}")
    print("✓ All images converted to WebP and components updated!")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
