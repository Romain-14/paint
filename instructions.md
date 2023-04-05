# PAINT

- reproduire le paint de window (pas toutes les fonctionnalités 🙃 )
- fichier html fourni
- reprendre la structure de l'exo 01 - masterpiece
    - sauf que là, on ne sera PAS sur une `sphere` MAIS sur un `crayon`

- il y aura plusieurs événements pour le dessin
    - maintenir le clic de la souris
        - le dessin est possible (impacte une propriété)
        - affecter la position actuelle du curseur à une propriété de cette objet
    - bouger la souris
        - récupérer la nouvelle position du curseur (variable portée de bloc)
        - appliquera les méthodes lié au context pour `dessiner` SI le dessin est possible
        - réaffecter la nouvelle position du curseur à la propriété de l'objet
    - relâcher le clic de la souris
        - on ne dessine plus 
    - sortie du curseur de la zone du canvas
        - dessin plus possible

- au clic sur l'un des boutons de mise en forme ou couleur, appliquer la mise à jour sur la propriété correspondante