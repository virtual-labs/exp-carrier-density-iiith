
## Fermi Level
The fermi function gives the probability of a state(if it exists) being occupied at equilibrium.

$$
f_0(E) = \frac{1}{1+e^{E-E_{f}/k_{B}T}}
$$

where
f<sub>o</sub>(E) is the fremi function for a given energy level,<br> 
E<sub>f</sub> is the fermi level,<br> 
k<sub>B</sub> is the Botzmann's constant whose value is 1.38* 10<sup>-23</sup> J/K and <br>
T is the temperature.<br>

The fermi function describes the electron density in the conduction band and the hole density in the valence band.

The fermi level is the value of Ef when the fermi function equates to ½, i.e.

$$
f_{o}(E) = \frac{1}{2}
$$

States below the fermi level have a low probability of being empty and the states above the fermi level have a low probability of being filled and states above the fermi level have a high probability of being filled

<p><img src="images/Fig_3.2.png" ></p> 

The width of the transition depends on temperature. The transition between high probability and low probability states increases with increase in temperature.


## Equilibrium Carrier Densities
Equilibrium carrier densities refer to the number of carriers in the conduction and valence band with no externally applied bias.Non-degenerate semiconductors are defined as semiconductors for which the Fermi energy is at least 3kT away from either band edge. It essentailly is a semiconductor whose conduction band level is much higher than the fermi-level and whose valence band level is much lower than the fermi-level. In a non degenerate semiconductor, the probability of the state at the bottom of the conduction band can be approximated to e<sup>(E<sub>f</sub> - E<sub>C</sub>) / k<sub>B</sub>T</sup>. Therefore, n, the electron density, is proportional to this value. Similarly, the probability of the state at the top of the valence band can be approximated to  e<sup>(E<sub>V</sub> - E<sub>f</sub>) / k<sub>B</sub>T</sup>. Therefore, p, the electron density, is proportional to this value.

$$
n \quad \alpha \quad e^{E_{F}-E_{C}/k_{B}T}
$$

$$
p \quad \alpha \quad e^{E_{V}-E_{F}/k_{B}T}
$$

Where,
n is electron density at the the bottom of the conduction band
p is the electron density at the top of the valence band<br>
E<sub>f</sub> is the fermi level<br>
E<sub>C</sub> is the fermi energy of the conduction band<br> 
E<sub>V</sub> is the fermi energy of the valence band<br>

## Electron Density in the Conduction Band

The number of electrons in a region can be calculated as the product of the number of states in that region and the fermi function(gives probability of those states being occupied).This can be written as,

$$
n_{o}(E) = f_{o}(E) D_{C}(E) dE
$$

Where D<sub>C</sub>(E) is the density of states for a given energy. Since f<sub>o</sub>(E) is the fermi function which is given by,

$$
f_0(E) = \frac{1}{1+e^{E-E_{f}/k_{B}T}}
$$

And density of states D<sub>C</sub> is given by,

$$
D_{C} = \frac{(2m*)^{3/2}}{2\pi^{2}\hbar^3} \sqrt{E-E_{C}}
$$

Where m* is the the effective mass for each electron.<br>
and ħ is the reduced plank's constant which is 6.26 x 10<sup>-34</sup> kg.m<sup>2</sup>.s<sup>-1</sup>

To calculate the electron density in the conduction band we integrate the electron densities for all the energies in the conduction band

$$ 
n_{o} = \int_{E_{C}}^{\inf} n_{o}(E)dE = \int_{E-{C}}^{\inf} f_{o}(E) D_{C}(E) dE
$$

For a nondegenrate semiconductor, this can be approximated to 

$$
n_{0} = N_{C} e^{E_{F}-E_{C}/k_{B}T}
$$

Where N<sub>C</sub> is the effective density state of the condution band it is defined as
$$
N_{C} = 2 (\frac{m_{n}^{*}k_{B}T}{2\pi\hbar^{2}})^{3/2}
$$

Here,<br>
m<sub>n</sub><sup>*</sup> is the effective mass of electrons<br>
k<sub>B</sub> is the Botzmann's constant whose value is 1.38* 10<sup>-23</sup> J/K  and <br>
&hbar; is the reduced Plank's constant whose value is 6.6*10<sup>-34</sup> J/Hz

<div align="center">
<image src="images/Fig_3.2.png" width="400px" height="auto">
<span style="float: right;">(4.14)</span>
</div><br>

## Hole Density in the Valence Band
Similar to electron density, hole density is found to be the product of the number of states in that region and the fermi function(gives probability of those states being occupied).


$$
p_{o}(E) = f_{o}(E) D_{V}(E) dE
$$

Where D<sub>V</sub>(E) is the density of states in the valence band for a given energy. Since f<sub>o</sub>(E) is the fermi function which is given by,

$$
f_0(E) = \frac{1}{1+e^{E-E_{f}/k_{B}T}}
$$

And density of states D<sub>C</sub> is given by,

$$
D_{V} = \frac{(2m*)^{3/2}}{2\pi^{2}\hbar^3} \sqrt{E_{V}-E}
$$

Where m* is the the effective mass for each hole.<br>
and ħ is the reduced plank's constant which is 6.26 x 10<sup>-34</sup> kg.m<sup>2</sup>.s<sup>-1</sup>

To calculate the hole density in the valence band we integrate the hole densities for all the energies in the conduction band

$$ 
p_{o} = \int_{0}^{E_{V}} p_{o}(E)dE = int_{0}^{E_{V}} f_{o}(E) D_{V}(E) dE
$$

For a nondegenrate semiconductor, this can be approximated to 

$$
n_{0} = N_{V} e^{E_{V}-E_{F}/k_{B}T}
$$

Where N<sub>C</sub> is the effective density state of the condution band it is defined as
$$
N_{C} = 2 (\frac{m_{p}^{*}k_{B}T}{2\pi\hbar^{2}})^{3/2}
$$

Here,<br>
m<sub>n</sub><sup>*</sup> is the effective mass of holes<br>
k<sub>B</sub> is the Botzmann's constant whose value is 1.38* 10<sup>-23</sup> J/K  and <br>
&hbar; is the reduced Plank's constant whose value is 6.6*10<sup>-34</sup> J/Hz

## Equilibrium Carrier Density Product 
This can be found by multiplying electron and hole concentrations
$$
n_{o}p_{o} = N_{C}e^{E_{F}-E_{C}/k_{B}T} \cdot N_{V}e^{E_{V}-E_{F}/k_{B}T}
$$

$$
n_{o}p_{o} = N_{C}N_{V} e^{E_{V}-E_{C}/k_{B}T}
$$

Since, the intrinsic carrier concentration, n<sub>i</sub>, is defined as 

$$
n_{i}^{2} = n_{o}p_{o}
$$

This expression can be written as
$$ 
n_{i} = \sqrt{N_{C}N_{V}} e^{-E_{G}/2k_{B}T}
$$
Where n<sub>i</sub> is the intrinsic carrier concentration and E<sub>G</sub> is the band gap.
The intrinsic carrier concentration is not dependent on the fermi level. It also depends exponentially on band gap and temperature.


## Intrinsic Fermi level 
For an n-type semiconductor, the fermi level is closer to the conduction band because the number of electrons in the conduction band is much larger than the number of holes in the valence band. Similarly, the fermi level of a p-type semiconductor is closer to the valence band because the number of holes in the valence band is much larger than the number of electrons in the conduction band.
So for an intrinsic semiconductor, where the number of electrons and holes are equal, we can deduce that the fermi level should be right in the middle.  

We found that the electron density can be written as-
$$
n_{o} = N_{C}e^{E_{F}-E_{C}/k_{B}T}
$$

and the hole concentration can be written as-

$$
p_{o} = N_{V}e^{E_{V}-E_{F}/k_{B}T}
$$

For an intrinsic semiconductor,

$$
n_{o} = p_{o} = n_{i}
$$

or, 
$$
N_{C}e^{E_{F}-E_{C}/k_{B}T} = N_{V}e^{E_{V}-E_{F}/k_{B}T}
$$

Solving for E<sub>F</sub> = E<sub>i</sub>(the intrinsic fermi level)

$$
E_{i} = \frac{E_{C} + E_{V}}{2} + \frac{k_{B}T}{2} ln(\frac{N_{V}}{N_{C}})
$$

We find that the inital assumption of the fermi level being right in the middle of the conduction and the valuence band is wrong and that there is an additional correction factor. This correction depends on the effective densities of states in the valence and conduction bands.

## Doping Density
Dopant concentration is N<sub>D</sub> and acceptor concertation is N<sub>A</sub>. Ideally all the dopant atoms ionize and contribute electron/hole for conduction leaving behind a charged center. Let the ionized latter’s concentration be N<sub>D</sub><sup>+</sup> or N<sub>A</sub><sup>-</sup><br>
The total carrier concentration is always represented by 𝑛 for free electrons and 𝑝 for free holes. Intrinsically electron-hole pairs are formed maintaining charge neutrality.<br>
For charge neutrality,
$$
p - n + N_{D}^{+} - N_{A}^{-} = 0
$$

In a uniformly doped semiconductor, mobile charges(electrons or holes) will be attracted to stationary charges (immobilized ions and dopants) so the net charge is zero. <br>
Almost all semiconductors will be nearly neutral in charge but with  strong non-uniformities (like the p-n junction), there will be a local charge.

## Doping and Temperature Dependence

<div align="center"><img src="images/Fig_3.3.png" width="400ps" height="auto"></div> 

### The Intrinsic Region
Intrinsic carriers are created by breaking covanlent bonds and exciting electrons accrossthe bandgap.<br>
Dopants are fully ionized and the net doping density is much larger than intrinsic carrier concentration.<br>
$$
\frac{n_{i}^{2}}{n_{o}} - n_{i} + N_{D} - N_{A} = 0
$$

$$
n_{o} = \frac{n_{i}^{2}}{n_{i} - N_{D} + N_{A}}
$$

And we can find p<sub>o</sub> from the formula
$$
p_{o} = \frac{n_{i}^{2}}{n_{o}}
$$

At higher temperatures, when semiconductors go intrinsic,the intrinsic carriers overwhelm the dopants. Devices, which rely on selective doping fail at high temperature(500k or above). However, semiconductores with larger bandgaps can operate in higher temperatures. 

### The Extrinsic Region
Dopants are fully ionized. The majority carrier concentration is simply equal to the dominant doping concentration. The minority carrier concentration equals n<sub>i</sub><sup>2</sup> divided by the dominant doping concentration.<br>
For an n type doped device, the net dopant concentration is much more than the net acceptor concentration. Furthermore, the difference between the net dopant concentration and the net acceptor concentration is much greater than the intrinsic carrier concentration
$$
N_{D} - N{A} >> n_{i}
$$
and,
$$
n_{o} = N_{D} - N{A} 
$$
Similarly for a p type doped device, the net acceptor concentration is much more than the net dopant concentration. Even for a p-type device, the difference between the net dopant concentration and the net acceptor concentration is much greater than the intrinsic carrier concentration

$$
N_{A} - N_{D} >> n_{i}
$$
and,
$$
p_{o} = N_{A} - N{D} 
$$

### Freeze Out Region
At very low temperatures (large 1/T), negligible intrinsic electron-hole-pairs (EHPs) exist (ni is very small), and the donor electrons are bound to the donor atoms. This is known as the ionization (or freeze-out) region.<br>
Dopants are partially ionised. The majority charge carrier concentration makes up almost all of the charge carrier concentration.<br>
Although metals can conduct at 0 Kelvin, semicondonctures cannot.<br>
However, heavily doped semiconductors are an exception. At large dopant concentrations, impurity ion distribution causes significant fluctuations in the local electrostatic potential, which gives rise to a spacial variation in th elocal density of states distribution. When averaged over the entire lattice, the conduction band and valence band essentially merge.
<div align="center"><img src="images/Fig_3.4.png" width="400ps" height="auto"></div> 
