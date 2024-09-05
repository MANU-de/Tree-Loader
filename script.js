const phrases = [
    'Feuchtigkeitsspendendes Pflanzenmaterial',
    'Berechnung des maximalen Wachstums',
    'Planung eines Dachgartens',
    'Brennholzzweige ernten',
    'Wiederaufforstung durchsetzen',
    'Bewirtschaftung benachbarter Felder',
  ].map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  
  const nextPhrase = () => {
    message = document.createElement('p')
    phrase = phrases.pop()
    message.innerText = phrase
    messages.appendChild(message)
    phrases.unshift(phrase)
    messages.removeChild(messages.children[0])
  }
  
  nextPhrase()
  setTimeout(nextPhrase, 100)
  setInterval(nextPhrase, 2500)