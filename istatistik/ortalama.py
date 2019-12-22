#centeral tendency(merkezi eğilim)
import numpy as np
from scipy import stats
#yas=[1,2,3,5,6,7,7,10,12,13]
maas = [100,13,44,23,56,13,68]
#mean ortalama
mean_yas = np.mean(maas)
print(mean_yas)

#median ortadaki
median_yas = np.median(maas)
print(median_yas)

#mode en çok olan sayı
mode_yas= stats.mode(maas)
print(mode_yas)
