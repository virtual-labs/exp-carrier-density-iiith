
## Fermi Level
The fermi function gives the probability of a state(if it exists) being occupied at equilibrium.
<p>f<sub>o</sub>(E) = 1 / [1 + e<sup>(E + E<sub>f</sub>) / k<sub>B</sub>T</sup>]</p>

The parameters of the function are, f<sub>o</sub>(E) and T.

It also describes the electron density in the conduction band and the hole density in the valence band.

The fermi level is the value of Ef when the fermi function equates to ½, i.e.
<p>f<sub>o</sub>(E) = 1/2</p>

States below the fermi level have a low probability of being empty and the states above the fermi level have a low probability of being filled.

<p><img src="images/9.png" ></p> 

The width of the transition depends on temperature. The transition between high probability and low probability states increases with increase in temperature.


## Equilibrium Carrier Densities
Equilibrium carrier densities refer to the number of carriers in the conduction and valence band with no externally applied bias. A nondegenerate semiconductor is a semiconductor whose conduction band level is much higher than the fermi-level and whose valence band level is much lower than the fermi-level. In a non degenerate semiconductor, the probability of the state at the bottom of the conduction band can be approximated to e<sup>(E<sub>f</sub> - E<sub>C</sub>) / k<sub>B</sub>T</sup>. Therefore, n, the electron density, is proportional to this value. Similarly, the probability of the state at the top of the valence band can be approximated to  e<sup>(E<sub>V</sub> + E<sub>f</sub>) / k<sub>B</sub>T</sup>. Therefore, p, the electron density, is proportional to this value.

<p>n  ∝  e<sup>(E<sub>f</sub> - E<sub>C</sub>) / k<sub>B</sub>T</sup></p>
<p>p  ∝  e<sup>(E<sub>V</sub> + E<sub>f</sub>) / k<sub>B</sub>T</sup></p>
Where,
n is electron density at the the bottom of the conduction band
p is the electron density at the top of the valence band
E<sub>f</sub> is the fermi level
E<sub>C</sub> is the fermi energy of the conduction band 
E<sub>V</sub> is the fermi energy of the valence band 

## Electron Density in the Conduction Band
The number of electrons in a region can be calculated as the product of the number of states in that region and the fermi function(gives probability of those states being occupied). 
<p>n<sub>o</sub> = f<sub>o</sub>(E)D<sub>C</sub>(E) dE</p>
<p>f<sub>o</sub>(E) = 1/(1+e<sup>(E + E<sub>f</sub>) / k<sub>B</sub>T</sup>)</p>
<p>D<sub>c</sub> = (<sup>(2m<sup>*</sup>)<sup>3/2</sup></sup> / 2π<sup>2</sup>h<sup>3</sup>) √(E - E<sub>C</sub>)</p>
 
To calculate the electron density in the conduction band,
<p>n<sub>o</sub> = E<sub>C</sub>n<sub>o</sub>(E) dE = E<sub>Co</sub>(E)D<sub>C</sub>(E) dE</p>
This can be approximated to 
<p>n<sub>o</sub> = N<sub>C</sub> F<sub>1/2</sub>(&#951;<sub>F</sub>)</p>
Here F<sub>1/2</sub> is the fermi-dirac integral. Where
<p><img src="images/1.png" ></p>
For a nondegenerate semiconductor, 
dF<sub>j</sub> d&#951;<sub>F</sub>;= F<sub>j+1</sub>  
Therefore, F<sub>1/2</sub>(F) can be approximated to eF for nondegenerate semiconductors.
n<sub>o</sub> = N<sub>C</sub> e<sup>&#951;<sub>F</sub></sup>
Where, <img src="images/2.png" >  and F = (E<sub>F</sub> + E<sub>C</sub>) / k<sub>B</sub>T 
<p><img src="images/3.png" ></p>

## Hole Density in the Valence Band
Similar to electron density, hole density is found to be the product of the number of states in that region and the fermi function(gives probability of those states being occupied).
<p>p<sub>o</sub> = N<sub>V</sub> e<sup>&#951;<sub>F</sub></sup> </p>
Where, <img src="images/4.png" >  and F = (E<sub>V</sub> - E<sub>F</sub>) / k<sub>B</sub>T 

## Equilibrium Carrier Density Product 
This can be found by multiplying electron and hole concentrations
<p><img src="images/5.png" ></p> 
This expression can be written as 
<p><img src="images/6.png" ></p> 
Where n<sub>i</sub> is the intrinsic carrier concentration and E<sub>G</sub> is the band gap.
The intrinsic carrier concentration is not dependent on the fermi level. It also depends exponentially on band gap and temperature.


## Intrinsic Fermi level 
For an n-type semiconductor, the fermi level is closer to the conduction band because the number of electrons in the conduction band is much larger than the number of holes in the valence band. Similarly, the fermi level of a p-type semiconductor is closer to the valence band because the number of holes in the valence band is much larger than the number of electrons in the conduction band.
So for an intrinsic semiconductor, where the number of electrons and holes are equal, we can deduce that the fermi level should be right in the middle.  
<p><img src="images/7.png" ></p> 
However, there is an additional correction factor. This correction depends on the effective densities of states in the valence and conduction bands.

## Doping Density
In a uniformly doped semiconductor, mobile charges(electrons or holes) will be attracted to stationary charges (immobilized ions and dopants) so the net charge is zero.

<p><img src="images/8.png" ></p> 

Almost all semiconductors will be nearly neutral in charge but with  strong non-uniformities (like the p-n junction), there will be a local charge.

## Doping and Temperature

<p><img src="images/10.png" ></p> 

### The Intrinsic Region
Intrinsic carriers aare created by breaking covanlent bonds and exciting electrons accrossthe bandgap.<br>
Dopants are fully ionized and the net doping density is much larger than intrinsic carrier concentration.<br>
<p>(n<sub>i</sub><sup>2</sup>/n<sub>o</sub>) - n<sub>i</sub>+N<sub>D</sub> N<sup>&lambda;<sub> = 0</p>

<p>(n<sub>i</sub><sup>2</sup>/n<sub>o</sub>) - n<sub>i</sub> + N<sub>D</sub> - N<sub>&lambda;</sub> = 0</p>
<p>n<sub>o</sub> = k + (k<sup>2</sup> + n<sub>i</sub><sup>2</sup>)<sup>1/2</sup></p>
<p>where k = (N<sub>D</sub> - N<sub>&lambda;</sub>)/2</p>
<p>p<sub>o</sub> = n<sub>i</sub><sup>2</sup>/n<sub>o</sub></p>

At higher temperatures, when semiconductors go intrinsic,the intrinsic carriers overwhelm the dopants. Devices, which rely on selective doping fail at high temperature(500k or above). However, semiconductores with larger bandgaps can operate in higher temperatures. 

### The Extrinsic Region
Dopants are fully ionized. The majority carrier concentration is simply equal to the dominant doping concentration. The minority carrier concentration equals n<sub>i</sub><sup>2</sup> divided by the dominant doping concentration.<br>
For an n type doped device,
<p>N<sub>D</sub> - N<sub>&lambda;</sub> >> n<sub>i</sub></p>
<p>n<sub>o</sub> = N<sub>D</sub> - N<sub>&lambda;</sub></p>
<p>p<sub>o</sub> = n<sub>i</sub><sup>2</sup>/n<sub>o</sub></p>

Similarly for a p type doped device,
<p>N<sub>D</sub> - N<sub>&lambda;</sub> >> n<sub>i</sub></p>
<p>p<sub>o</sub> = N<sub>D</sub> - N<sub>&lambda;</sub></p>
<p>n<sub>o</sub> = n<sub>i</sub><sup>2</sup>/p<sub>o</sub></p>

### Freeze Out Region
Dopants are partially ionised. The majority charge carrier concentration makes up almost all of the charge carrier concentration.<br>
Although metals can conduct at 0 Kelvin, semicondonctures cannot.<br>
However, heavily doped semiconductors are an exception. At large dopant concentrations, impurity ion distribution causes significant fluctuations in the local electrostatic potential, which gives rise to a spacial variation in th elocal density of states distribution. When averaged over the entire lattice, the conduction band and valence band essentially merge.
