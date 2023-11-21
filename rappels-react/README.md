# Exercices

Tester le composant `Select` en lui passant des props :

```
render(<Select value="Toto" items={['Toto', 'Titi']} />);
```

3 tests :

- vérifier que la value s'affiche
- vérifier qu'en cliquant sur la value le menu déroule (un des item présent s'affiche)
- avec vi.fn() vérifier qu'en cliquant sur un item, onChange est bien appelé
- Bonus : tester imperativeHandle avec une ref