import re
def get_matching_words(regex):
 words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
 matches = []
 for word in words:
 	if re.findall(regex,word):
 		matches.append(word)
 print matches

get_matching_words(r'\w+v')
get_matching_words(r'\w+ss')
get_matching_words(r'\we$')
get_matching_words(r'b\wb')
get_matching_words(r'.*b.+b')
get_matching_words(r'.*b.*b')
get_matching_words(r'.*a.*e.*i.*o.*u')
get_matching_words(r'regulaxpsion')
get_matching_words(r'(\w)\1')



