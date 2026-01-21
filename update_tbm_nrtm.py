#!/usr/bin/env python3
import json

# Update TBM and NRTM with full names in parentheses
updates = {
    'sk': {
        'capabilities': [
            "TBM (Tunelovací stroj)",
            "NRTM (Nový Rakúsky Tunelovací Metóda)",
            "Hĺbené tunely",
            "Konštrukcie a mosty",
            "Meranie konvergenčných posunov",
            "Monitoring v 3D BIM projekcii",
            "Skenovanie výrubov a striekaného betónu",
            "Spracovanie meraní a skenov"
        ]
    },
    'en': {
        'capabilities': [
            "TBM (Tunnel Boring Machine)",
            "NRTM (New Austrian Tunneling Method)",
            "Mined tunnels",
            "Structures and bridges",
            "Convergence displacement measurement",
            "Monitoring in 3D BIM projection",
            "Scanning of excavations and shotcrete",
            "Processing of measurements and scans"
        ]
    },
    'de': {
        'capabilities': [
            "TBM (Tunnelbohrmaschine)",
            "NRTM (Neue Österreichische Tunnelbauweise)",
            "Bergmännisch aufgefahrene Tunnel",
            "Konstruktionen und Brücken",
            "Konvergenzmessung",
            "Monitoring in 3D BIM Projektion",
            "Scannen von Ausbrüchen und Spritzbeton",
            "Verarbeitung von Messungen und Scans"
        ]
    },
    'sv': {
        'capabilities': [
            "TBM (Tunnelborrmaskin)",
            "NRTM (Ny Österrikisk Tunnelmetod)",
            "Grävda tunnlar",
            "Konstruktioner och broar",
            "Konvergensmätning",
            "Övervakning i 3D BIM projektion",
            "Skanning av utgrävningar och sprutbetong",
            "Bearbetning av mätningar och skanningar"
        ]
    },
    'no': {
        'capabilities': [
            "TBM (Tunnelbormaskin)",
            "NRTM (Ny Østerriksk Tunnelmetode)",
            "Gravde tunneler",
            "Konstruksjoner og broer",
            "Konvergensmåling",
            "Overvåking i 3D BIM projeksjon",
            "Skanning av utgravinger og sprutbetong",
            "Behandling av målinger og skanninger"
        ]
    },
    'es': {
        'capabilities': [
            "TBM (Tuneladora)",
            "NRTM (Nuevo Método Austriaco de Tunelización)",
            "Túneles excavados",
            "Estructuras y puentes",
            "Medición de desplazamientos de convergencia",
            "Monitoreo en proyección 3D BIM",
            "Escaneo de excavaciones y hormigón proyectado",
            "Procesamiento de mediciones y escaneos"
        ]
    },
    'fr': {
        'capabilities': [
            "TBM (Tunnelier)",
            "NRTM (Nouvelle Méthode Autrichienne de Creusement de Tunnels)",
            "Tunnels creusés",
            "Structures et ponts",
            "Mesure des déplacements de convergence",
            "Surveillance en projection 3D BIM",
            "Numérisation des excavations et béton projeté",
            "Traitement des mesures et numérisations"
        ]
    }
}

# Update all language files
for lang, data in updates.items():
    filepath = f'src/i18n/locales/{lang}.json'

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            json_data = json.load(f)

        # Update the tunneling capabilities
        if 'services' in json_data and 'tunneling' in json_data['services']:
            json_data['services']['tunneling']['capabilities'] = data['capabilities']

        # Write updated data
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(json_data, f, ensure_ascii=False, indent=2)

        print(f"✓ Updated {lang}.json")

    except Exception as e:
        print(f"✗ Error updating {lang}.json: {e}")

print("\nAll TBM/NRTM descriptions updated!")
