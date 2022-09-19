"""
calculate effect size from params
"""
import numpy as np

# bandit
param_dict_hc = {
    'Arew': 0.569,  # reward learning rate
    'Apun': 0.016,  # punishment learning rate
    'R':    9.417,  # reward sensitivity
    'P':    5.778,  # punishment sensitivity
    'xi':   0.026,  # lapse
    'd':    0.469   # decay
}

# assumed patient parameters 
param_dict_pt = {
    'Arew': 0.585,  # reward learning rate
    'Apun': 0.106,  # punishment learning rate
    'R':    12.750,  # reward sensitivity
    'P':    9.953,  # punishment sensitivity
    'xi':   0.105,   # lapse
    'd':    0.603   # decay
}

# control sd
sd_dict_hc= {
    'Arew': 0.178,  # reward learning rate
    'Apun': 0.018,  # punishment learning rate
    'R':    5.031,  # reward sensitivity
    # 'P':    1.715,  # punishment sensitivity
    'P':    3.715,  # punishment sensitivity
    'xi':   0.003,   # lapse
    'd':    0.261   # decay
}

# patient sd
sd_dict_pt = {
    'Arew': 0.300,  # reward learning rate
    'Apun': 0.010,  # punishment learning rate
    'R':    5.911,  # reward sensitivity
    # 'P':    1.577,  # punishment sensitivity
    'P':    2.577,  # punishment sensitivity
    'xi':   0.043,   # lapse
    'd':    0.311   # decay
}

eff_bandit_p = (param_dict_hc['P']-param_dict_pt['P'])/np.mean([sd_dict_hc['P'], sd_dict_pt['P']])
eff_bandit_xi = (param_dict_hc['xi']-param_dict_pt['xi'])/np.mean([sd_dict_hc['xi'], sd_dict_pt['xi']])

print(f'bandit punishment sensitivity effect={eff_bandit_p:.3f}')
print(f'bandit lapse effect={eff_bandit_xi:.3f}')

