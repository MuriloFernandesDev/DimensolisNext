export const moneyMask = (value: string) => {
    var tmp = value + "";
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
};

export const date = (date: string) => {
    const convert = new Date(date).toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
    });
    return convert.split(" ")[0];
};

export const cpfMask = (value: string) => {
    value = value + "";

    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
        value = value.replace(/^(\d{2})(\d)/, "$1.$2");
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }

    return value;
};

export const formatarMoeda = (e: any) => {
    var v = e?.target.value.replace(/\D/g, "");

    v = (v / 100).toFixed(2);

    v = v.replace(".", ",");

    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");

    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

    e.target.value = v;
};

export function apenasNumeros(string: any) {
    var numsStr = string?.replace(/[^0-9]/g, "");
    var addnumber = numsStr + "00";
    var addponto = addnumber.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return addponto;
}

export function soNumerosInput(evt: any) {
    var v = evt?.target.value.replace(/\D/g, "");
    evt.target.value = v;
}

export function apenasString(string: any) {
    const result = string
        ?.replace(/[0-9]/g, "")
        .replace(",", "")
        .replace("kWp", "");

    return result;
}
