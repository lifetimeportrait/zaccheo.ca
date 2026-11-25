from pathlib import Path
from urllib.request import urlopen
from urllib.error import URLError, HTTPError

BASE = "https://zaccheodesigns.zipfolios.com/wp-content/uploads/sites/30/2019/06/"
NAMES = [
    "900px_01_ZaccheoDesigns.jpg",
    "900px_02_ZaccheoDesigns.jpg",
    "900px_03_ZaccheoDesigns.jpg",
    "900px_04_ZaccheoDesigns.jpg",
    "900px_06_ZaccheoDesigns.jpg",
    "900px_07_ZaccheoDesigns.jpg",
    "900px_08_ZaccheoDesigns.jpg",
    "900px_09_ZaccheoDesigns.jpg",
    "900px_10_ZaccheoDesigns.jpg",
    "900px_11_ZaccheoDesigns.jpg",
    "900px_12_ZaccheoDesigns.jpg",
    "900px_13_ZaccheoDesigns.jpg",
    "900px_14_ZaccheoDesigns.jpg",
    "900px_15_ZaccheoDesigns.jpg",
    "900px_16_ZaccheoDesigns.jpg",
    "900px_17_ZaccheoDesigns.jpg",
    "900px_18_ZaccheoDesigns.jpg",
    "900px_20_ZaccheoDesigns.jpg",
    "900px_21_ZaccheoDesigns.jpg",
    "900px_22_ZaccheoDesigns.jpg",
    "900px_23_ZaccheoDesigns.jpg",
    "900px_24_ZaccheoDesigns.jpg",
    "900px_25_ZaccheoDesigns.jpg",
    "900px_26_ZaccheoDesigns.jpg",
    "900px_27_ZaccheoDesigns.jpg",
    "900px_28_ZaccheoDesigns.jpg",
    "900px_29_ZaccheoDesigns.jpg",
    "900px_30_ZaccheoDesigns.jpg",
    "900px_31_ZaccheoDesigns.jpg",
    "900px_32_ZaccheoDesigns.jpg",
    "900px_33_ZaccheoDesigns.jpg",
    "900px_34_ZaccheoDesigns.jpg",
    "900px_35_ZaccheoDesigns.jpg",
    "900px_36_ZaccheoDesigns.jpg",
    "900px_37_ZaccheoDesigns.jpg",
    "900px_38_ZaccheoDesigns.jpg",
    "900px_39_ZaccheoDesigns.jpg",
    "ManAndHisWorld.jpg",
    "BioPicture.jpg",
    "Texture.jpg",
    "Rino_HeadShoulder.jpg",
    "Map2.jpg",
    "Z-Header-Logo.png",
]
out = Path("assets")
out.mkdir(exist_ok=True)
for name in NAMES:
    target = out / name
    try:
        with urlopen(BASE + name, timeout=25) as response:
            data = response.read()
        target.write_bytes(data)
        print("Downloaded", name, len(data), "bytes")
    except (URLError, HTTPError, TimeoutError) as exc:
        print("FAILED", name, exc)
