#!/usr/bin/env python3
import json

# Translations for the 3 new projects
new_projects = {
    'de': {
        "hammarby": {
            "title": "Hammarby Sjöstad 7714",
            "location": "Stockholm, Schweden",
            "description": "Stockholms erste U-Bahn-Station unter Wasser - Präzisionsvermessung unter dem Hammarby-Kanal.",
            "overview": "Die U-Bahn-Erweiterung Hammarby Sjöstad ist Teil von Stockholms ehrgeizigem Ausbauprojekt der Blauen Linie. Dieses bahnbrechende Projekt umfasst die Station Hammarby Kanal, Stockholms erste U-Bahn-Station, die im Fels unter Wasser gebaut wurde und fortschrittliche Vermessungstechniken für den Unterwasserbau erfordert.",
            "scope": [
                "Unterirdisches Kontrollnetzwerk für U-Bahn-Tunnelbau",
                "TBM-Führung für Unterwasser-Tunnelabschnitte",
                "Deformationsüberwachung von Kanalstrukturen während der Aushubarbeiten",
                "Präzisionsvermessung unter Wasserspiegel",
                "Bestandsdokumentation für Felskaverne-Station",
                "Integration mit Blauer Linie Erweiterung nach Nacka"
            ],
            "achievements": [
                "Erfolgreiche Vermessung für Stockholms erste Unterwasser-U-Bahn-Station",
                "Millimeterpräzision in anspruchsvoller aquatischer Umgebung",
                "Null Vorfälle während Operationen in Kanalnähe",
                "Pionierarbeit bei neuen Vermessungstechniken für Unterwasser-Stationsbau"
            ],
            "clientName": "Schwedische Verkehrsverwaltung (Trafikverket)",
            "durationPeriod": "2020-2030",
            "teamSizeCount": "6-10 Spezialisten"
        },
        "osloK2C": {
            "title": "Oslo K2C Metro-Erweiterung",
            "location": "Oslo, Norwegen",
            "description": "Hochpräzise Vermessung für Oslos kritische Metro-Infrastrukturerweiterung.",
            "overview": "Das K2C-Projekt ist Teil der umfangreichen Metro- und Bahninfrastrukturentwicklung Oslos und unterstützt die wachsenden Transportbedürfnisse der Stadt. NR-GEO erbrachte umfassende Vermessungsdienstleistungen für Tunnelbau, Stationsentwicklung und Integration mit bestehender Infrastruktur.",
            "scope": [
                "Präzisionsvermessung für Metro-Tunnelaushub",
                "Einrichtung unterirdischer Kontrollnetze",
                "TBM-Führung und Überwachung",
                "Deformationsüberwachung bestehender Strukturen",
                "Integration mit Oslos bestehendem Metro-Netzwerk",
                "Echtzeitdatenverarbeitung und Qualitätskontrolle"
            ],
            "achievements": [
                "Sub-Zentimeter-Genauigkeit während des gesamten Projekts",
                "Erfolgreiche Integration mit operativem Metro-System",
                "Null Störungen für bestehende Metro-Dienste",
                "Alle Meilensteine termingerecht geliefert"
            ],
            "clientName": "Bane NOR / Oslo Kommune",
            "durationPeriod": "2021-2024",
            "teamSizeCount": "5-8 Spezialisten"
        },
        "prahaMetroD": {
            "title": "Praha Metro D",
            "location": "Prag, Tschechische Republik",
            "description": "Prags vierte Metro-Linie - 10,6 km mit 10 Stationen, mit fahrerlosen Zügen.",
            "overview": "Metro-Linie D ist Prags neueste und technologisch fortschrittlichste Metro-Linie mit 10,6 Kilometern und 10 Stationen zwischen Náměstí Míru und Depo Písnice. Dieses Vorzeigeprojekt verfügt über vollautomatische fahrerlose Züge. NR-GEO bietet Präzisionsvermessungsdienste für dieses komplexe unterirdische Bauprojekt.",
            "scope": [
                "Hochpräzise Tunnelausrichtungsvermessung für 10,6 km Route",
                "Unterirdische Kontrollnetze für 10 Stationsstandorte",
                "TBM-Führung und Durchschlagspräzisionsplanung",
                "Deformationsüberwachung historischer Stadtstrukturen",
                "Bestandsdokumentation für automatisierte Zugsysteme",
                "Integration mit bestehenden Metro-Linien (Umstieg bei Pankrác)"
            ],
            "achievements": [
                "Beitrag zu Prags größtem Metro-Erweiterungsprojekt",
                "Unterstützung beim Bau der ersten fahrerlosen Metro-Linie in Tschechien",
                "Präzisionsvermessung für komplexe städtische Tunnelbedingungen",
                "Erfolgreiche Überwachung in historischer Innenstadtumgebung"
            ],
            "clientName": "Dopravní podnik hl. m. Prahy (Prager Verkehrsbetriebe)",
            "durationPeriod": "2022-2031",
            "teamSizeCount": "8-12 Spezialisten"
        }
    },
    'sk': {
        "hammarby": {
            "title": "Hammarby Sjöstad 7714",
            "location": "Štokholm, Švédsko",
            "description": "Prvá podvodná stanica metra v Štokholme - presné meranie pod kanálom Hammarby.",
            "overview": "Rozšírenie metra Hammarby Sjöstad je súčasťou ambiciózneho projektu rozšírenia modrej linky v Štokholme. Tento prelomový projekt zahŕňa stanicu Hammarby Kanal, prvú stanicu metra v Štokholme postavenú v skale pod vodou, vyžadujúcu pokročilé meracie techniky pre podvodnú výstavbu.",
            "scope": [
                "Podzemná kontrolná sieť pre výstavbu tunela metra",
                "Vedenie TBM pre podvodné úseky tunela",
                "Monitorovanie deformácií kanálových štruktúr počas výkopu",
                "Presné meranie pod úrovňou vody",
                "Dokumentácia skutočného stavu pre skalné stanice",
                "Integrácia s rozšírením modrej linky do Nacky"
            ],
            "achievements": [
                "Úspešné meranie pre prvú podvodnú stanicu metra v Štokholme",
                "Milimetrová presnosť v náročnom vodnom prostredí",
                "Nula incidentov počas operácií v blízkosti kanála",
                "Priekopnícke nové meracie techniky pre výstavbu podvodných staníc"
            ],
            "clientName": "Švédska dopravná správa (Trafikverket)",
            "durationPeriod": "2020-2030",
            "teamSizeCount": "6-10 špecialistov"
        },
        "osloK2C": {
            "title": "Oslo K2C rozšírenie metra",
            "location": "Oslo, Nórsko",
            "description": "Vysoko presné meranie pre kritické rozšírenie infraštruktúry metra v Osle.",
            "overview": "Projekt K2C je súčasťou rozsiahleho rozvoja infraštruktúry metra a železníc v Osle, podporujúc rastúce dopravné potreby mesta. NR-GEO poskytla komplexné meracie služby pre výstavbu tunelov, vývoj staníc a integráciu s existujúcou infraštruktúrou.",
            "scope": [
                "Presné meranie pre výkop tunela metra",
                "Zriadenie podzemnej kontrolnej siete",
                "Vedenie a monitorovanie TBM",
                "Monitorovanie deformácií existujúcich štruktúr",
                "Integrácia s existujúcou sieťou metra v Osle",
                "Spracovanie údajov v reálnom čase a kontrola kvality"
            ],
            "achievements": [
                "Sub-centimetrová presnosť počas celého projektu",
                "Úspešná integrácia s prevádzkovaným systémom metra",
                "Nula narušení existujúcich služieb metra",
                "Všetky míľniky dodané včas"
            ],
            "clientName": "Bane NOR / Mesto Oslo",
            "durationPeriod": "2021-2024",
            "teamSizeCount": "5-8 špecialistov"
        },
        "prahaMetroD": {
            "title": "Praha Metro D",
            "location": "Praha, Česká republika",
            "description": "Štvrtá linka metra v Prahe - 10,6 km s 10 stanicami, s technológiou vlakov bez vodiča.",
            "overview": "Metro linka D je najnovšia a technologicky najmodernejšia linka metra v Prahe, s dĺžkou 10,6 kilometra a 10 stanicami spájajúcimi Náměstí Míru a Depo Písnice. Tento vlajkový infraštruktúrny projekt využíva plne automatizované vlaky bez vodiča. NR-GEO poskytuje presné meracie služby pre tento komplexný projekt podzemnej výstavby.",
            "scope": [
                "Vysoko presné meranie zarovnania tunela pre 10,6 km trasu",
                "Podzemné kontrolné siete pre 10 staníc",
                "Vedenie TBM a plánovanie presnosti prierazu",
                "Monitorovanie deformácií historických mestských štruktúr",
                "Dokumentácia skutočného stavu pre automatizované vlakové systémy",
                "Integrácia s existujúcimi linkami metra (prestup na Pankrác)"
            ],
            "achievements": [
                "Prispievanie k najväčšiemu projektu rozšírenia metra v Prahe",
                "Podpora výstavby prvej linky metra bez vodiča v Česku",
                "Presné meranie pre komplexné mestské tunelovacie podmienky",
                "Úspešné monitorovanie v historickom prostredí centra mesta"
            ],
            "clientName": "Dopravní podnik hl. m. Prahy (Pražská dopravná spoločnosť)",
            "durationPeriod": "2022-2031",
            "teamSizeCount": "8-12 špecialistov"
        }
    },
    'sv': {
        "hammarby": {
            "title": "Hammarby Sjöstad 7714",
            "location": "Stockholm, Sverige",
            "description": "Stockholms första tunnelbanestation under vatten - precisionsmätning under Hammarby kanal.",
            "overview": "Hammarby Sjöstad tunnelbaneförlängning är en del av Stockholms ambitiösa Blå linjens utbyggnadsprojekt. Detta banbrytande projekt inkluderar Hammarby kanal station, Stockholms första tunnelbanestation byggd i berg under vatten, vilket kräver avancerad mätteknik för undervattenskonstruktion.",
            "scope": [
                "Underjordiskt kontrollnätverk för tunnelbanekonstruktion",
                "TBM-styrning för undervattentunnelsektioner",
                "Deformationsövervakning av kanalstrukturer under schaktning",
                "Precisionsmätning under vattennivå",
                "Relationshandlingar för bergkavernstation",
                "Integration med Blå linjens förlängning till Nacka"
            ],
            "achievements": [
                "Framgångsrik mätning för Stockholms första undervattentunnelbanestation",
                "Millimeterprecision i utmanande akvatisk miljö",
                "Noll incidenter under kanalnära operationer",
                "Banbrytande nya mätteknikerför undervattenstationskonstruktion"
            ],
            "clientName": "Trafikverket",
            "durationPeriod": "2020-2030",
            "teamSizeCount": "6-10 specialister"
        },
        "osloK2C": {
            "title": "Oslo K2C tunnelbaneförlängning",
            "location": "Oslo, Norge",
            "description": "Högprecisionsmätning för Oslos kritiska tunnelbaneinfrastrukturutbyggnad.",
            "overview": "K2C-projektet är en del av Oslos omfattande tunnelbane- och järnvägsinfrastrukturutveckling som stödjer stadens växande transportbehov. NR-GEO tillhandahöll omfattande mättjänster för tunnelkonstruktion, stationsutveckling och integration med befintlig infrastruktur.",
            "scope": [
                "Precisionsmätning för tunnelbaneschaktning",
                "Etablering av underjordiskt kontrollnätverk",
                "TBM-styrning och övervakning",
                "Deformationsövervakning av befintliga strukturer",
                "Integration med Oslos befintliga tunnelbanenätverk",
                "Realtidsdatabehandling och kvalitetskontroll"
            ],
            "achievements": [
                "Sub-centimeter noggrannhet genom hela projektet",
                "Framgångsrik integration med operativt tunnelbanesystem",
                "Noll störningar för befintliga tunnelbanetjänster",
                "Alla milstolpar levererade i tid"
            ],
            "clientName": "Bane NOR / Oslo kommun",
            "durationPeriod": "2021-2024",
            "teamSizeCount": "5-8 specialister"
        },
        "prahaMetroD": {
            "title": "Praha Metro D",
            "location": "Prag, Tjeckien",
            "description": "Prags fjärde tunnelbanelinje - 10,6 km med 10 stationer, med förarlös tågteknik.",
            "overview": "Metro linje D är Prags nyaste och mest teknologiskt avancerade tunnelbanelinje, som sträcker sig 10,6 kilometer med 10 stationer som förbinder Náměstí Míru och Depo Písnice. Detta flaggskepp infrastrukturprojekt har helt automatiserade förarlösa tåg. NR-GEO tillhandahåller precisionsmättjänster för detta komplexa underjordiska byggprojekt.",
            "scope": [
                "Högprecisionsmätning av tunneljustering för 10,6 km rutt",
                "Underjordiska kontrollnätverk för 10 stationsplatser",
                "TBM-styrning och genombrytningsprecisionsplanering",
                "Deformationsövervakning av historiska stadsstrukturer",
                "Relationshandlingar för automatiserade tågsystem",
                "Integration med befintliga tunnelbanelinjer (byte vid Pankrác)"
            ],
            "achievements": [
                "Bidrar till Prags största tunnelbaneexpansionsprojekt",
                "Stöd för konstruktion av första förarlösa tunnelbanelinjen i Tjeckien",
                "Precisionsmätning för komplexa urbana tunnelförhållanden",
                "Framgångsrik övervakning i historisk innerstadsmiljö"
            ],
            "clientName": "Dopravní podnik hl. m. Prahy (Prags kollektivtrafik)",
            "durationPeriod": "2022-2031",
            "teamSizeCount": "8-12 specialister"
        }
    },
    'no': {
        "hammarby": {
            "title": "Hammarby Sjöstad 7714",
            "location": "Stockholm, Sverige",
            "description": "Stockholms første undervanns t-banestasjon - presisjonsmåling under Hammarby kanal.",
            "overview": "Hammarby Sjöstad t-baneforlengelse er en del av Stockholms ambisiøse Blå linjes utbyggingsprosjekt. Dette banebrytende prosjektet inkluderer Hammarby kanal stasjon, Stockholms første t-banestasjon bygget i fjell under vann, som krever avanserte måleteknikker for undervannskonstruksjon.",
            "scope": [
                "Underjordisk kontrollnettverk for t-banekonstruksjon",
                "TBM-styring for undervanns tunnelseksjoner",
                "Deformasjonsovervåking av kanalstrukturer under graving",
                "Presisjonsmåling under vannivå",
                "Byggdokumentasjon for fjellkavernstasjon",
                "Integrasjon med Blå linjes forlengelse til Nacka"
            ],
            "achievements": [
                "Vellykket måling for Stockholms første undervanns t-banestasjon",
                "Millimeterpresisjon i utfordrende akvatisk miljø",
                "Null hendelser under kanalnære operasjoner",
                "Banebrytende nye måleteknikker for undervannsstasjonsbygging"
            ],
            "clientName": "Svensk transportadministrasjon (Trafikverket)",
            "durationPeriod": "2020-2030",
            "teamSizeCount": "6-10 spesialister"
        },
        "osloK2C": {
            "title": "Oslo K2C t-baneforlengelse",
            "location": "Oslo, Norge",
            "description": "Høypresisjonsmåling for Oslos kritiske t-baneinfrastrukturutbygging.",
            "overview": "K2C-prosjektet er en del av Oslos omfattende t-bane- og jernbaneinfrastrukturutvikling som støtter byens voksende transportbehov. NR-GEO leverte omfattende måletjenester for tunnelbygging, stasjonsutvikling og integrasjon med eksisterende infrastruktur.",
            "scope": [
                "Presisjonsmåling for t-banetunnelgraving",
                "Etablering av underjordisk kontrollnettverk",
                "TBM-styring og overvåking",
                "Deformasjonsovervåking av eksisterende strukturer",
                "Integrasjon med Oslos eksisterende t-banenettverk",
                "Sanntidsdatabehandling og kvalitetskontroll"
            ],
            "achievements": [
                "Sub-centimeter nøyaktighet gjennom hele prosjektet",
                "Vellykket integrasjon med operativt t-banesystem",
                "Null forstyrrelser for eksisterende t-banetjenester",
                "Alle milepæler levert i tide"
            ],
            "clientName": "Bane NOR / Oslo kommune",
            "durationPeriod": "2021-2024",
            "teamSizeCount": "5-8 spesialister"
        },
        "prahaMetroD": {
            "title": "Praha Metro D",
            "location": "Praha, Tsjekkia",
            "description": "Prahas fjerde t-banelinje - 10,6 km med 10 stasjoner, med førerløs togteknologi.",
            "overview": "Metro linje D er Prahas nyeste og mest teknologisk avanserte t-banelinje, som strekker seg 10,6 kilometer med 10 stasjoner som forbinder Náměstí Míru og Depo Písnice. Dette flaggskip infrastrukturprosjektet har helt automatiserte førerløse tog. NR-GEO leverer presisjonsmåletjenester for dette komplekse underjordiske byggeprosjektet.",
            "scope": [
                "Høypresisjonsmåling av tunneljustering for 10,6 km rute",
                "Underjordiske kontrollnettverk for 10 stasjonslokasjoner",
                "TBM-styring og gjennombruddspresisjon planlegging",
                "Deformasjonsovervåking av historiske bystrukturer",
                "Byggdokumentasjon for automatiserte togsystemer",
                "Integrasjon med eksisterende t-banelinjer (bytte ved Pankrác)"
            ],
            "achievements": [
                "Bidrar til Prahas største t-baneekspansjonsprosjekt",
                "Støtte for bygging av første førerløse t-banelinje i Tsjekkia",
                "Presisjonsmåling for komplekse urbane tunnelforhold",
                "Vellykket overvåking i historisk sentrumsområde"
            ],
            "clientName": "Dopravní podnik hl. m. Prahy (Praha kollektivtransport)",
            "durationPeriod": "2022-2031",
            "teamSizeCount": "8-12 spesialister"
        }
    },
    'es': {
        "hammarby": {
            "title": "Hammarby Sjöstad 7714",
            "location": "Estocolmo, Suecia",
            "description": "Primera estación de metro subacuática de Estocolmo - topografía de precisión bajo el canal Hammarby.",
            "overview": "La extensión del metro de Hammarby Sjöstad es parte del ambicioso proyecto de expansión de la Línea Azul de Estocolmo. Este proyecto innovador incluye la estación Hammarby Kanal, la primera estación de metro de Estocolmo construida en roca bajo el agua, que requiere técnicas avanzadas de topografía para construcción subacuática.",
            "scope": [
                "Red de control subterránea para construcción de túnel de metro",
                "Guía TBM para secciones de túnel subacuático",
                "Monitoreo de deformación de estructuras del canal durante excavación",
                "Topografía de precisión bajo el nivel del agua",
                "Documentación como construido para estación de caverna rocosa",
                "Integración con extensión de Línea Azul a Nacka"
            ],
            "achievements": [
                "Topografía exitosa para primera estación de metro subacuática de Estocolmo",
                "Precisión milimétrica en ambiente acuático desafiante",
                "Cero incidentes durante operaciones de proximidad al canal",
                "Pioneros en nuevas técnicas de topografía para construcción de estaciones subacuáticas"
            ],
            "clientName": "Administración Sueca de Transporte (Trafikverket)",
            "durationPeriod": "2020-2030",
            "teamSizeCount": "6-10 especialistas"
        },
        "osloK2C": {
            "title": "Oslo K2C extensión de metro",
            "location": "Oslo, Noruega",
            "description": "Topografía de alta precisión para expansión crítica de infraestructura de metro de Oslo.",
            "overview": "El proyecto K2C es parte del extenso desarrollo de infraestructura de metro y ferrocarril de Oslo, apoyando las crecientes necesidades de transporte de la ciudad. NR-GEO proporcionó servicios integrales de topografía para construcción de túneles, desarrollo de estaciones e integración con infraestructura existente.",
            "scope": [
                "Topografía de precisión para excavación de túnel de metro",
                "Establecimiento de red de control subterránea",
                "Guía y monitoreo TBM",
                "Monitoreo de deformación de estructuras existentes",
                "Integración con red de metro existente de Oslo",
                "Procesamiento de datos en tiempo real y control de calidad"
            ],
            "achievements": [
                "Precisión sub-centimétrica durante todo el proyecto",
                "Integración exitosa con sistema de metro operativo",
                "Cero interrupciones a servicios de metro existentes",
                "Todos los hitos entregados a tiempo"
            ],
            "clientName": "Bane NOR / Municipio de Oslo",
            "durationPeriod": "2021-2024",
            "teamSizeCount": "5-8 especialistas"
        },
        "prahaMetroD": {
            "title": "Praha Metro D",
            "location": "Praga, República Checa",
            "description": "Cuarta línea de metro de Praga - 10,6 km con 10 estaciones, con tecnología de trenes sin conductor.",
            "overview": "La línea D del Metro es la línea de metro más nueva y tecnológicamente avanzada de Praga, que abarca 10,6 kilómetros con 10 estaciones conectando Náměstí Míru y Depo Písnice. Este proyecto emblemático de infraestructura cuenta con trenes totalmente automatizados sin conductor. NR-GEO proporciona servicios de topografía de precisión para este complejo proyecto de construcción subterránea.",
            "scope": [
                "Topografía de alineación de túnel de alta precisión para ruta de 10,6 km",
                "Redes de control subterráneas para 10 ubicaciones de estaciones",
                "Guía TBM y planificación de precisión de avance",
                "Monitoreo de deformación de estructuras históricas de la ciudad",
                "Documentación como construido para sistemas de trenes automatizados",
                "Integración con líneas de metro existentes (transferencia en Pankrác)"
            ],
            "achievements": [
                "Contribuyendo al mayor proyecto de expansión de metro de Praga",
                "Apoyando construcción de primera línea de metro sin conductor en República Checa",
                "Topografía de precisión para condiciones complejas de tunelización urbana",
                "Monitoreo exitoso en entorno histórico del centro de la ciudad"
            ],
            "clientName": "Dopravní podnik hl. m. Prahy (Compañía de Tránsito Público de Praga)",
            "durationPeriod": "2022-2031",
            "teamSizeCount": "8-12 especialistas"
        }
    },
    'fr': {
        "hammarby": {
            "title": "Hammarby Sjöstad 7714",
            "location": "Stockholm, Suède",
            "description": "Première station de métro sous-marine de Stockholm - levé de précision sous le canal Hammarby.",
            "overview": "L'extension du métro Hammarby Sjöstad fait partie de l'ambitieux projet d'expansion de la Ligne Bleue de Stockholm. Ce projet révolutionnaire comprend la station Hammarby Kanal, la première station de métro de Stockholm construite dans la roche sous l'eau, nécessitant des techniques de levé avancées pour la construction sous-marine.",
            "scope": [
                "Réseau de contrôle souterrain pour construction de tunnel de métro",
                "Guidage TBM pour sections de tunnel sous-marin",
                "Surveillance des déformations des structures du canal pendant excavation",
                "Levé de précision sous le niveau de l'eau",
                "Documentation de récolement pour station de caverne rocheuse",
                "Intégration avec extension de Ligne Bleue vers Nacka"
            ],
            "achievements": [
                "Levé réussi pour première station de métro sous-marine de Stockholm",
                "Précision millimétrique dans environnement aquatique difficile",
                "Zéro incident pendant opérations de proximité du canal",
                "Pionnier de nouvelles techniques de levé pour construction de stations sous-marines"
            ],
            "clientName": "Administration Suédoise des Transports (Trafikverket)",
            "durationPeriod": "2020-2030",
            "teamSizeCount": "6-10 spécialistes"
        },
        "osloK2C": {
            "title": "Oslo K2C extension de métro",
            "location": "Oslo, Norvège",
            "description": "Levé de haute précision pour expansion critique d'infrastructure de métro d'Oslo.",
            "overview": "Le projet K2C fait partie du vaste développement d'infrastructure de métro et de chemin de fer d'Oslo, soutenant les besoins de transport croissants de la ville. NR-GEO a fourni des services de levé complets pour construction de tunnels, développement de stations et intégration avec infrastructure existante.",
            "scope": [
                "Levé de précision pour excavation de tunnel de métro",
                "Établissement de réseau de contrôle souterrain",
                "Guidage et surveillance TBM",
                "Surveillance des déformations des structures existantes",
                "Intégration avec réseau de métro existant d'Oslo",
                "Traitement de données en temps réel et contrôle qualité"
            ],
            "achievements": [
                "Précision sous-centimétrique tout au long du projet",
                "Intégration réussie avec système de métro opérationnel",
                "Zéro perturbation des services de métro existants",
                "Tous les jalons livrés à temps"
            ],
            "clientName": "Bane NOR / Municipalité d'Oslo",
            "durationPeriod": "2021-2024",
            "teamSizeCount": "5-8 spécialistes"
        },
        "prahaMetroD": {
            "title": "Praha Metro D",
            "location": "Prague, République tchèque",
            "description": "Quatrième ligne de métro de Prague - 10,6 km avec 10 stations, avec technologie de trains sans conducteur.",
            "overview": "La ligne D du métro est la ligne de métro la plus récente et la plus technologiquement avancée de Prague, s'étendant sur 10,6 kilomètres avec 10 stations reliant Náměstí Míru et Depo Písnice. Ce projet d'infrastructure phare dispose de trains entièrement automatisés sans conducteur. NR-GEO fournit des services de levé de précision pour ce projet de construction souterraine complexe.",
            "scope": [
                "Levé d'alignement de tunnel de haute précision pour route de 10,6 km",
                "Réseaux de contrôle souterrains pour 10 emplacements de stations",
                "Guidage TBM et planification de précision de percée",
                "Surveillance des déformations des structures historiques de la ville",
                "Documentation de récolement pour systèmes de trains automatisés",
                "Intégration avec lignes de métro existantes (transfert à Pankrác)"
            ],
            "achievements": [
                "Contribution au plus grand projet d'expansion de métro de Prague",
                "Soutien à la construction de première ligne de métro sans conducteur en République tchèque",
                "Levé de précision pour conditions complexes de tunnelisation urbaine",
                "Surveillance réussie dans environnement historique du centre-ville"
            ],
            "clientName": "Dopravní podnik hl. m. Prahy (Compagnie de Transport Public de Prague)",
            "durationPeriod": "2022-2031",
            "teamSizeCount": "8-12 spécialistes"
        }
    }
}

# Update all language files
for lang, projects in new_projects.items():
    filepath = f'src/i18n/locales/{lang}.json'

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Add new projects
        if 'projects' in data:
            data['projects']['hammarby'] = projects['hammarby']
            data['projects']['osloK2C'] = projects['osloK2C']
            data['projects']['prahaMetroD'] = projects['prahaMetroD']

        # Write updated data
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        print(f"✓ Updated {lang}.json with 3 new projects")

    except Exception as e:
        print(f"✗ Error updating {lang}.json: {e}")

print("\nAll translations updated with new projects!")
