import requests

def download_youbike_data()->list:
    url = 'https://data.ntpc.gov.tw/api/datasets/010e5b15-3823-4b20-b401-b1cf000550c5/json?page=0&size=1000'

    try:
        response = requests.get(url)
        response.raise_for_status()
        try:
            data = response.json()
        except requests.exceptions.JSONDecodeError as jsonError:
            raise Exception(f"發生轉換格式錯誤:jsonError")
    except requests.exceptions.HTTPError as err_http:
        raise Exception(f"發生 HTTP 錯誤: {err_http}")
    except requests.exceptions.ConnectionError as err_conn:
        raise Exception(f"發生連線錯誤 (例如 DNS 查詢失敗、連線被拒): {err_conn}")
    except requests.exceptions.Timeout as err_timeout:
        raise Exception(f"請求超時: {err_timeout}")
    except requests.exceptions.RequestException as err:
        # 這是所有 requests 例外的父類別，可以用來捕捉其他未預期的錯誤
        raise Exception(f"發生未預期的請求錯誤: {err}")
    else:
        return data
    
def get_area(data)->list:
    areas = set()
    for item in data:
        areas.add(item['sarea'])
    return list(areas)

def get_sites_of_area(data,area)->list:
    sites = []
    for item in data:
        if item['sarea'] == area:
            sites.append(item)
    return sites