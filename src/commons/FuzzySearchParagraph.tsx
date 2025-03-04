const FuzzySearchParagraph = () => {
  return (
    <p>
      Die Suche im Verzeichnis der Ortsnamen erfolgt "unscharf". Sie müssen den
      Ortsnamen also nicht exakt so schreiben, wie wir ihn in unserer Datenbank
      führen. Wenn Sie z. B. "Weierbush" oder "buscht" eintippen, wird trotzdem
      der Weyerbuschturm gefunden und als bester Treffer angeboten. Bei der
      unscharfen Suche wird für jeden Ort ein individueller Zahlenwert
      berechnet, der die Übereinstimmung mit dem Suchtext beschreibt. Wir bilden
      daraus Trefferklassen (Perfekte, Sehr gute, Gute, Befriedigende und
      Ausreichende Treffer), die als Überschriften in der Trefferliste angezeigt
      werden. <b>Achtung</b>: Bei sehr langen Texteingaben mit vielen
      Leerzeichen liefert die unscharfe Suche bisweilen unplausible Treffer. Wir
      versuchen dieses Problem bei der Weiterentwicklung des DigiTal Zwillings
      abzustellen.
    </p>
  );
};

export default FuzzySearchParagraph;
