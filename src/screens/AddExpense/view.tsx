import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import DatePicker from 'react-native-date-picker';
import BaseText from '../../components/BaseText';
import {theme} from '../../theme';
import {
  AddExpense,
  Amount,
  Container,
  DataTextInput,
  DescriptionTextInput,
  Symbol,
  ViewData,
  ViewDescription,
} from './styles';
import {AddExpenseProps} from './type';

const AddExpenseView: React.FC<AddExpenseProps> = ({
  amount,
  setAmount,
  description,
  setDescription,
  onPressViewData,
  openModal,
  date,
  confirm,
  cancel,
  addExpense,
}) => {
  const {t} = useTranslation();

  return (
    <Container>
      <BaseText size="h1" color={theme.colors.neutral._99}>
        {t('AddExpense.title')}
      </BaseText>

      <Amount>
        <CurrencyInput
          style={{
            fontSize: theme.fontSizes.h1,
            fontFamily: theme.fonts.medium,
          }}
          value={amount}
          onChangeValue={(newValue: number | null) => setAmount(newValue || 0)}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
      </Amount>
      <View>
        <BaseText size="h3">{t('AddExpense.description')}</BaseText>
        <ViewDescription>
          <Symbol />
          <DescriptionTextInput
            value={description}
            onChangeText={setDescription}
            placeholder={t('AddExpense.descriptionInput')}
          />
        </ViewDescription>
      </View>
      <View>
        <BaseText size="h3">{t('AddExpense.data')}</BaseText>
        <ViewData onPress={onPressViewData}>
          <Symbol />
          <DataTextInput>
            <BaseText size="h5">
              {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
            </BaseText>
          </DataTextInput>
        </ViewData>
        <DatePicker
          modal
          mode="date"
          open={openModal}
          date={date}
          onConfirm={confirm}
          onCancel={cancel}
        />
      </View>
      <AddExpense onPress={addExpense}>
        <BaseText size="h1">+</BaseText>
      </AddExpense>
    </Container>
  );
};

export default AddExpenseView;
