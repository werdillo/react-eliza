import React from 'react'
import CollectionItem from './CollectionItem'
import Basic_sofa from './BasicItems/BasicSofas';
import Basic_mattresses from './BasicItems/BasicMattresses';
import { useTranslation } from 'react-i18next';

export default function Basic() {
  const { t } = useTranslation();
  const data = [
    {
      title: t("Pages.collection.sofas"),
      path: "sofa",
      data: Basic_sofa,
    },
    {
      title: t("Pages.collection.mattresses"),
      path: "mattresses",
      data: Basic_mattresses,
    },
  ]
  return <CollectionItem data={data} collection="basic" />
}