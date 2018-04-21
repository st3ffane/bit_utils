# Bit-Utils

Une petite bibliothèque pour regrouper les opérations binaires courantes sur des entiers.


# Functions
## AND
AND Binaire de 2 entiers

exemple: 31 (11111) *AND* 10 (00101) = 10 (00101)

    let res = require('bit-utils').and(26,22);

* @param  {int32}  v1 le premier binaire de l'operation (int32)

* @param  {int32}  v2 le second binaire de l'operation (int32)

* @param  {int32}  length nombre de bits a prendre en compte pour le calcul (max: 32, defaut 8)

* @param  {int32}  offset index du permier bit a prendre en compte (defaut 0, max = 32-length)



* @return  {int} le resultat de l'operation AND

## OR
OR Binaire de 2 entiers
Exemple: 26 (11010) *OR* 22 (10110) = 30 (11110)

    let res = require('bit-utils').or(26,22);

* @param  {int32}  v1 le premier binaire de l'operation (int32)

* @param  {int32}  v2 le second binaire de l'operation (int32)

* @param  {int32}  length nombre de bits a prendre en compte pour le calcul (max: 32, defaut 8)

* @param  {int32}  offset index du permier bit a prendre en compte (defaut 0, max = 32-length)



* @return  {int} le resultat de l'operation AND
## XOR
XOR Binaire de 2 entiers
Exemple: 26 (11010) *OR* 22 (10110) = 12 (01100)

    let res = require('bit-utils').xor(26,22);

* @param  {int32}  v1 le premier binaire de l'operation (int32)

* @param  {int32}  v2 le second binaire de l'operation (int32)

* @param  {int32}  length nombre de bits a prendre en compte pour le calcul (max: 32, defaut 8)

* @param  {int32}  offset index du permier bit a prendre en compte (defaut 0, max = 32-length)
## NOT
 NOT Binaire d'un vecteur

*exemple:* NOT 10 (00101) = 10 (00101)

    let res = require('bit-utils').not(10);

* @param  {int32}  v le premier binaire a inverser (int32)

* @param  {int32}  length nombre de bits a prendre en compte pour le calcul (max: 32, defaut 8)

* @param  {int32}  offset index du permier bit a prendre en compte (defaut 0, max = 32-length)



* @return  {int} le resultat de l'operation NOT
## SPARSIFY
sparsify un entier ie, tranforme l'entier en une representation ayant autant de bits set qu'unset, utile pour identifier, dans une cmm, les vecteurs valides
*La version est super basique et necessitera peut etre une reecriture...*
 exemple: *SPARSE* 19 (10011) = 165 (10100101)

     let res=require('bit-utils').sparsify(19,4);

* @param  {int}  v l'entier a 'sparsifier'

* @param  {int}  length le nombre de bits du vecteur a prendre en compte max: 16bits

* @param  {int}  l'offset du premier bit a prendre en compte

 



## IS_OVERWRITTEN
Verifie si 2 vecteurs sont overwritten, ie, si tous les bits sets du premier vecteur sont set dans le second aussi.
exemple:  18 (10010) OVERW 27 (11011) = true

    let res=require('bit-utils').is_overwritten(18,27);
* @param  {int32}  v1 le vecteur recheché (int32)

* @param  {int32}  v2 le vecteur où rechercher (int32)

* @param  {int32}  length nombre de bits a prendre en compte pour le calcul (max: 32, defaut 8)

* @param  {int32}  offset index du permier bit a prendre en compte (defaut 0, max = 32-length)