#!/usr/bin/env python3
import json

# Languages to update
languages = ['de', 'sk', 'sv', 'no', 'es', 'fr']

for lang in languages:
    filepath = f'src/i18n/locales/{lang}.json'

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # 1. Remove "Digital Twin development for infrastructure" from scanToBim capabilities
        if 'services' in data and 'scanToBim' in data['services']:
            capabilities = data['services']['scanToBim'].get('capabilities', [])
            # Filter out Digital Twin related entries
            new_capabilities = []
            for cap in capabilities:
                # Check if it contains "Digital Twin" or "digitálne dvojčatá" or similar
                if 'digital twin' not in cap.lower() and 'digitálne dvojčatá' not in cap.lower() and 'digitale zwilling' not in cap.lower() and 'digitala tvilling' not in cap.lower() and 'digitale tvillingen' not in cap.lower() and 'gemelos digitales' not in cap.lower() and 'jumeaux numériques' not in cap.lower():
                    new_capabilities.append(cap)
            data['services']['scanToBim']['capabilities'] = new_capabilities

        # 2. Remove cadastral service completely
        if 'services' in data and 'cadastral' in data['services']:
            del data['services']['cadastral']

        # 3. Remove Brenner and Rail Baltica projects
        if 'projects' in data:
            if 'brenner' in data['projects']:
                del data['projects']['brenner']
            if 'railBaltica' in data['projects']:
                del data['projects']['railBaltica']

        # Write updated data
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        print(f"✓ Updated {lang}.json")

    except Exception as e:
        print(f"✗ Error updating {lang}.json: {e}")

print("\nAll translations updated!")
